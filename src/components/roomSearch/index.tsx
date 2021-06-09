import React, { useState } from 'react'

interface Props {}

export const RoomSearch = (props: Props) => {
  const [roomName, setRoomName] = useState<String>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(roomName)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setRoomName(e.currentTarget.value)
        }
        type="text"
        name="room"
        id="room"
        placeholder="Room's name..."
        className="p-2 rounded border border-gray-200 bg-white focus:bg-white focus:outline-none focus:ring-2 focus:to-blue-900 focus:border-transparent text-black"
      />
      <button
        type="submit"
        className="dark:bg-indigo-800 p-3 rounded-lg shadow-md"
      >
        Crear Sala
      </button>
    </form>
  )
}
