'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'

export function ContactMap() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<L.Map | null>(null)

  useEffect(() => {
    if (!mapContainer.current || mapInstance.current) return

    try {
      // Initialize map
      mapInstance.current = L.map(mapContainer.current).setView(
        [12.9716, 79.1408], // Latitude, Longitude for Vellore, Tamil Nadu
        13 // Zoom level
      )

      // Add tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(mapInstance.current)

      // Create custom icon
      const customIcon = L.icon({
        iconUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%232563eb" width="32" height="32"%3E%3Cpath d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5z"/%3E%3C/svg%3E',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      })

      // Add marker at exact location
      const marker = L.marker([12.9716, 79.1408], { icon: customIcon }).addTo(
        mapInstance.current
      )

      // Add popup
      marker.bindPopup(
        '<div class="font-semibold text-sm">Chatura Solutions<br/>1st Cross Road, C Sector<br/>V.G.Rao Nagar, Katpadi<br/>Vellore, Tamil Nadu 632007</div>',
        { maxWidth: 250 }
      )

      marker.openPopup()
    } catch (error) {
      console.error('[v0] Map initialization error:', error)
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove()
        mapInstance.current = null
      }
    }
  }, [])

  return (
    <div
      ref={mapContainer}
      className="w-full h-full rounded-t-lg lg:rounded-lg"
      style={{ minHeight: '384px' }}
    />
  )
}
