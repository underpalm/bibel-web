import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ExternalLink, Smartphone, X } from "lucide-react";

const storeOptions = [
  {
    id: "ios",
    label: "iOS",
    description: "App Store",
    href: "https://apps.apple.com/app/id6778565221",
  },
  {
    id: "android",
    label: "Android",
    description: "Google Play",
    href: "https://play.google.com/store/apps",
  },
];

const StoreModalContext = createContext({
  openStoreModal: () => {},
  closeStoreModal: () => {},
});

export const useStoreModal = () => useContext(StoreModalContext);

export const StoreModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openStoreModal = useCallback(() => setIsOpen(true), []);
  const closeStoreModal = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const value = useMemo(
    () => ({ openStoreModal, closeStoreModal }),
    [openStoreModal, closeStoreModal]
  );

  return (
    <StoreModalContext.Provider value={value}>
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/50 px-4 py-8 backdrop-blur-sm"
          onClick={closeStoreModal}
          role="presentation"
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="store-modal-title"
          >
            <button
              type="button"
              onClick={closeStoreModal}
              className="absolute right-4 top-4 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-900"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <h2
              id="store-modal-title"
              className="pr-10 text-2xl font-display text-gray-900"
            >
              Try Rose Beta
            </h2>

            <div className="mt-6 grid gap-3">
              {storeOptions.map((option) => (
                <a
                  key={option.id}
                  href={option.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-16 items-center justify-between rounded-lg border border-gray-200 px-4 py-3 text-left transition-colors hover:border-gray-900 hover:bg-gray-50"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-900">
                      <Smartphone size={20} />
                    </span>
                    <span>
                      <span className="block text-base font-semibold text-gray-900">
                        {option.label}
                      </span>
                      <span className="block text-sm text-gray-500">
                        {option.description}
                      </span>
                    </span>
                  </span>
                  <ExternalLink size={18} className="shrink-0 text-gray-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </StoreModalContext.Provider>
  );
};
