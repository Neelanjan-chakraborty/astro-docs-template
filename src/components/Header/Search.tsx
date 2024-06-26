/** @jsxImportSource react */
import { useState, useCallback, useRef } from 'react';
import { ALGOLIA } from '../../consts'; // Ensure you have ALGOLIA constants defined properly
import '@docsearch/css';
import { createPortal } from 'react-dom';
import * as docSearchReact from '@docsearch/react';
import '../../styles/search.scss'; // Import the custom CSS file

/** FIXME: This is still kinda nasty, but DocSearch is not ESM ready. */
const DocSearchModal = docSearchReact.DocSearchModal || (docSearchReact as any).default.DocSearchModal;
const useDocSearchKeyboardEvents = docSearchReact.useDocSearchKeyboardEvents || (docSearchReact as any).default.useDocSearchKeyboardEvents;

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const [initialQuery, setInitialQuery] = useState('');

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const onInput = useCallback(
    (e) => {
      setIsOpen(true);
      setInitialQuery(e.key);
    },
    [setIsOpen, setInitialQuery]
  );

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef
  });

  return (
    <>
      <div className="relative flex flex-1 justify-end gap-3.5 items-center">
        <button
          type="button"
          ref={searchButtonRef}
          onClick={onOpen}
          className="DocSearch DocSearch-Button"
          aria-label="Search"
        >
          <span className="DocSearch-Button-Container">
            <svg width="20" height="20" className="DocSearch-Search-Icon" viewBox="0 0 20 20">
              <path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <span className="DocSearch-Button-Placeholder">Search</span>
          </span>
          <span className="DocSearch-Button-Keys p-5">
            <div className="DocSearch-Button-1">
              <svg width="15" height="15" className="DocSearch-Control-Key-Icon">
                <path d="M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953" strokeWidth="1.2" stroke="currentColor" fill="none" strokeLinecap="square"></path>
              </svg>
            </div>
            <div className="DocSearch-Button-0">K</div>
          </span>
        </button>
      </div>
      

      {isOpen &&
        createPortal(
          <DocSearchModal
            initialQuery={initialQuery}
            initialScrollY={window.scrollY}
            onClose={onClose}
            indexName={ALGOLIA.indexName}
            appId={ALGOLIA.appId}
            apiKey={ALGOLIA.apiKey}
            transformItems={(items) => {
              return items.map((item) => {
                // We transform the absolute URL into a relative URL to
                // work better on localhost, preview URLS.
                const a = document.createElement('a');
                a.href = item.url;
                const hash = a.hash === '#overview' ? '' : a.hash;
                return {
                  ...item,
                  url: `${a.pathname}${hash}`
                };
              });
            }}
          />,
          document.body
        )}
    </>
  );
}
