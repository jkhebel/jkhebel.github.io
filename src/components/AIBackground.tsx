'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Connection {
  id: number
  x1: number
  y1: number
  x2: number
  y2: number
  opacity: number
  delay: number
}

interface Node {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  delay: number
}

export function AIBackground() {
  const [connections, setConnections] = useState<Connection[]>([])
  const [nodes, setNodes] = useState<Node[]>([])

  useEffect(() => {
    // Generate neural network-like connections
    const newConnections: Connection[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x1: Math.random() * 100,
      y1: Math.random() * 100,
      x2: Math.random() * 100,
      y2: Math.random() * 100,
      opacity: Math.random() * 0.3 + 0.1,
      delay: Math.random() * 5
    }))

    // Generate nodes
    const newNodePositions = [
      { x: 10, y: 20 }, { x: 25, y: 15 }, { x: 40, y: 25 }, { x: 55, y: 35 },
      { x: 70, y: 20 }, { x: 85, y: 30 }, { x: 15, y: 60 }, { x: 30, y: 70 },
      { x: 45, y: 80 }, { x: 60, y: 65 }, { x: 75, y: 75 }, { x: 90, y: 85 }
    ]

    const newNodes: Node[] = newNodePositions.map((pos, i) => ({
      id: i,
      x: pos.x,
      y: pos.y,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.4 + 0.1,
      delay: Math.random() * 3
    }))

    setConnections(newConnections)
    setNodes(newNodes)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Neural Network Connections */}
      {connections.map((connection) => (
        <motion.div
          key={connection.id}
          className="absolute"
          style={{
            left: `${Math.min(connection.x1, connection.x2)}%`,
            top: `${Math.min(connection.y1, connection.y2)}%`,
            width: `${Math.abs(connection.x2 - connection.x1)}%`,
            height: `${Math.abs(connection.y2 - connection.y1)}%`,
            opacity: connection.opacity
          }}
          animate={{
            opacity: [connection.opacity, connection.opacity * 1.5, connection.opacity],
            scale: [1, 1.02, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: connection.delay,
            ease: "easeInOut"
          }}
        >
          <svg
            width="100%"
            height="100%"
            style={{ position: 'absolute' }}
          >
            <line
              x1={`${connection.x1 < connection.x2 ? 0 : 100}%`}
              y1={`${connection.y1 < connection.y2 ? 0 : 100}%`}
              x2={`${connection.x1 < connection.x2 ? 100 : 0}%`}
              y2={`${connection.y1 < connection.y2 ? 100 : 0}%`}
              stroke="var(--color-accent-300, #64b5f6)"
              strokeWidth="1"
              strokeDasharray="5,5"
              opacity="0.3"
            />
          </svg>
        </motion.div>
      ))}

      {/* Neural Network Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute rounded-full"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: `${node.size}px`,
            height: `${node.size}px`,
            backgroundColor: 'var(--color-accent-400, #42a5f5)',
            opacity: node.opacity
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [node.opacity, node.opacity * 1.5, node.opacity]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: node.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Data Flow Particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-accent-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.2
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear"
          }}
        />
      ))}

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-accent-200, #90caf9) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-accent-200, #90caf9) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  )
}
