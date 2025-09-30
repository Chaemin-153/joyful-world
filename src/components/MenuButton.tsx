type MenuButtonProps = {
  open: boolean;
  onOpen: () => void;
  btnRef: React.RefObject<HTMLButtonElement | null>;
};

const MenuButton = ({ open, onOpen, btnRef }: MenuButtonProps) => {
  return (
    <>
      {/* 모바일: 햄버거 버튼 */}
      <button
        ref={btnRef}
        type="button"
        className="md:hidden inline-flex items-center justify-center rounded-md border border-white/50 px-2 py-1 text-sm"
        aria-label="Open menu"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => onOpen()}
      >
        <span className="relative block h-4 w-5" aria-hidden>
          <span className="absolute inset-x-0 top-0 h-0.5 bg-white"></span>
          <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-white"></span>
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white"></span>
        </span>
      </button>
    </>
  );
};

export default MenuButton;
