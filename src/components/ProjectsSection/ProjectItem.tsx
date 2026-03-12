import type { TProject } from "../../type/data_type";
import { useLang } from "../../hook/useLang";

type Props = {
  project: TProject;
  onSelect: (project: TProject) => void;
};

const ProjectItem = ({ project, onSelect }: Props) => {
  const { t } = useLang();

  return (
    <div className="group relative flex flex-col rounded-[28px] overflow-hidden">
      <img
        src={project.image}
        alt={t(project.name_project)}
        className="aspect-square object-cover object-top w-full"
        loading="lazy"
        decoding="async"
        width={415}
        height={415}
      />

      {project.detail && (
        <>
          {/* Desktop overlay */}
          <div className="hidden md:flex absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition items-center justify-center">
            <button
              onClick={() => onSelect(project)}
              className="px-6 py-2 rounded-[28px] border border-white text-white text-sm hover:bg-title-portfolio hover:border-transparent transition cursor-pointer"
            >
              {t("home.project.view_detail")}
            </button>
          </div>

          {/* Mobile button */}
          <div className="md:hidden p-3 flex justify-center absolute left-1/2 transform -translate-x-1/2 bottom-12.5">
            <button
              onClick={() => onSelect(project)}
              className="px-3 py-2 rounded-[28px] bg-title-portfolio text-white text-[10px]"
            >
              {t("home.project.view_detail")}
            </button>
          </div>
        </>
      )}

      <div className="flex justify-center p-4 text-sm md:text-md tracking-[3.5%] text-tile-box bg-[#191A1B] capitalize">
        <span>{t(project.name_project)}</span>
      </div>
    </div>
  );
};

export default ProjectItem;