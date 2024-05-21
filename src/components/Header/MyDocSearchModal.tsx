import { useState } from 'react'
import * as docSearchReact from '@docsearch/react'

const DocSearchModal =
  docSearchReact.DocSearchModal ||
  (docSearchReact as any).default.DocSearchModal

export default function MyDocSearchModal({ onClose }) {
  const [isOpen, setIsOpen] = useState(true)

  const handleClose = () => {
    setIsOpen(false)
    onClose()
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none`}
    >
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-3xl font-semibold">
              DocSearch Modal
            </h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={handleClose}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative p-6 flex-auto">
            {/* Add your DocSearch React modal here */}
            {isOpen && (
              <DocSearchModal
                // Add your DocSearch props here
                indexName="your_index_name"
                apiKey="your_api_key"
                appId="your_app_id"
                onClose={handleClose}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
