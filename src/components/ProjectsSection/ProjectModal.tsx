import type { TProject } from "../../type/data_type";
import { useEffect } from "react";
import { useLang } from "../../hook/useLang";

type Props = {
  project: TProject | null;
  onClose: () => void;
};

const ProjectModal = ({ project, onClose }: Props) => {
  const { t } = useLang();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#191A1B] rounded-2xl flex flex-col max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-white/10 relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-2 md:right-4 text-white text-xl cursor-pointer"
          >
            ✕
          </button>

          <h3 className="text-sm md:text-2xl font-bold text-white uppercase text-center">
            {t(project.name_project)}
          </h3>
        </div>

        <div className="p-6 overflow-y-auto pr-3 custom-scrollbar">
          <div
            className="prose prose-invert max-w-none text-white text-sm md:text-base"
            dangerouslySetInnerHTML={{
              __html: t(project.detail ?? ""),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;