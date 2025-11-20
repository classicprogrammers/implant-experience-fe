import React, { useEffect, useMemo, useState } from 'react'
import { api } from '../../../utils/api'
import group40321Image from '../../../assets/images/Group 40321.png'
import gear1Image from '../../../assets/images/gear 1.png'
import arrowImage from '../../../assets/images/arrow.png'

const DEFAULT_USER_ID = '50d4340f-c41f-42ca-a988-18a66db6ac67'
const SUMMARY_BASE_ENDPOINT = '/recalls/summary'

const TODAY_STATUS_KEYS = {
  safe: ['safe', 'safeCount', 'safe_count', 'safeDevices', 'safe_devices'],
  monitor: ['monitor', 'monitorCount', 'monitor_count', 'monitoring', 'watch'],
  actions: ['action', 'actions', 'actionCount', 'action_count', 'actionRequired', 'requires_action', 'critical'],
}

const BUCKET_SOURCES = ['statusCounts', 'status_counts', 'statuses', 'items', 'summary', 'data']

const toNumber = (value) => {
  if (value === null || value === undefined || value === '') return null
  const parsed = Number(value)
  if (Number.isFinite(parsed)) return parsed
  if (typeof value === 'object') {
    return toNumber(value.count ?? value.value ?? value.total ?? value.number)
  }
  return null
}

const extractFromBuckets = (obj = {}, labels = []) => {
  for (const sourceKey of BUCKET_SOURCES) {
    const source = obj[sourceKey]
    if (!Array.isArray(source)) continue

    for (const entry of source) {
      if (!entry || typeof entry !== 'object') continue
      const label = String(entry.status ?? entry.label ?? entry.state ?? entry.type ?? entry.name ?? '')
        .trim()
        .toLowerCase()

      if (labels.includes(label)) {
        const candidate = toNumber(entry.count ?? entry.value ?? entry.total ?? entry.number)
        if (candidate !== null) return candidate
      }
    }
  }
  return null
}

const extractCount = (obj = {}, keyGroup = [], labels = []) => {
  for (const key of keyGroup) {
    const candidate = toNumber(obj[key])
    if (candidate !== null) return candidate
  }
  return extractFromBuckets(obj, labels)
}

const normalizeSummary = (raw = {}) => {
  const summaryObjectCandidates = [raw?.data, raw?.summary, raw]
  const summaryObject =
    summaryObjectCandidates.find((entry) => entry && typeof entry === 'object' && !Array.isArray(entry)) || {}

  return {
    safe: extractCount(summaryObject, TODAY_STATUS_KEYS.safe, TODAY_STATUS_KEYS.safe) ?? 0,
    monitor: extractCount(summaryObject, TODAY_STATUS_KEYS.monitor, TODAY_STATUS_KEYS.monitor) ?? 0,
    actions: extractCount(summaryObject, TODAY_STATUS_KEYS.actions, TODAY_STATUS_KEYS.actions) ?? 0,
  }
}

const resolveUserId = () => {
  try {
    const storedUser = localStorage.getItem('user')
    if (!storedUser) return DEFAULT_USER_ID

    const parsedUser = JSON.parse(storedUser)
    return parsedUser?.id || parsedUser?._id || parsedUser?.userId || parsedUser?.user_id || DEFAULT_USER_ID
  } catch {
    return DEFAULT_USER_ID
  }
}

const TodayStats = () => {
  const [summary, setSummary] = useState({ safe: 0, monitor: 0, actions: 0 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true

    const fetchSummary = async () => {
      try {
        setLoading(true)
        setError(null)

        const userId = resolveUserId()
        const endpoint = userId ? `${SUMMARY_BASE_ENDPOINT}/${userId}` : SUMMARY_BASE_ENDPOINT
        const response = await api.get(endpoint)

        if (!isMounted) return
        setSummary(normalizeSummary(response?.data))
      } catch (err) {
        console.error('Error fetching recall summary:', err)
        if (!isMounted) return
        setError('Unable to load summary')
        setSummary({ safe: 0, monitor: 0, actions: 0 })
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchSummary()

    return () => {
      isMounted = false
    }
  }, [])

  const displayCounts = useMemo(() => {
    const formatCount = (count) => {
      if (loading) return '--'
      if (error) return '00'
      const numeric = Number(count) || 0
      return numeric.toString().padStart(2, '0')
    }

    return {
      safe: formatCount(summary.safe),
      monitor: formatCount(summary.monitor),
      actions: formatCount(summary.actions),
    }
  }, [summary, loading, error])

  return (
    <div className="today-section">
      <h2 className="section-title">Today</h2>
      <div className="cards-container">
        <div className="card safe-card active">
          <div className="card-icon">
            <img src={group40321Image} alt="Safe" width="20" height="20" />
          </div>
          <div className="card-content">
            <span className="card-text">Safe</span>
            <span className="card-subtitle">Any Text</span>
          </div>
          <div className="card-number">{displayCounts.safe}</div>
          <div className="card-arrow">
            <img src={arrowImage} alt="Arrow" width="16" height="16" />
          </div>
        </div>

        {/* Monitor Card - Inactive */}
        {/* <div className="card monitor-card">
          <div className="card-icon">
            <img src={monitorImage} alt="Monitor" width="20" height="20" />
          </div>
          <div className="card-content">
            <span className="card-text">Monitor</span>
            <span className="card-subtitle">Any Text</span>
          </div>
          <div className="card-number">{displayCounts.monitor}</div>
          <div className="card-arrow">
            <img src={arrowImage} alt="Arrow" width="16" height="16" />
          </div>
        </div> */}

        <div className="card actions-card">
          <div className="card-icon">
            <img src={gear1Image} alt="Actions" width="20" height="20" />
          </div>
          <div className="card-content">
            <span className="card-text">Actions</span>
            <span className="card-subtitle">Any Text</span>
          </div>
          <div className="card-number">{displayCounts.actions}</div>
          <div className="card-arrow">
            <img src={arrowImage} alt="Arrow" width="16" height="16" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodayStats