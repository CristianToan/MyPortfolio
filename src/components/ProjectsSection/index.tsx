import { useMemo, useState } from "react";
import { LIST_CATEGORIES, LIST_PROJECTS } from "../../data/home";
import { useLang } from "../../hook/useLang"
import type { TCategory, TProject } from "../../type/data_type";
import ProjectModal from "./ProjectModal";
import ProjectItem from "./ProjectItem";

const ProjectsSection = ({ id }: { id: string }) => {
  const {t} = useLang();
	const [activeCategory, setActiveCategory] = useState<number | null>(null);
	const [selectedProject, setSelectedProject] = useState<TProject | null>(null);
	const [visibleCount, setVisibleCount] = useState(9);
	const filteredProjects = useMemo(() => {
		if (!activeCategory) return LIST_PROJECTS;

		return LIST_PROJECTS.filter((project) =>
			project.category_ids.includes(activeCategory)
		);
	}, [activeCategory]);

	// const categoryMap = useMemo(() => {
	// 	return Object.fromEntries(
	// 		LIST_CATEGORIES.map(cat => [cat.id, cat])
	// 	);
	// }, []);


  return (
    <section id={id} className="scroll-mt-20.75">
      <div className="container mx-auto px-4 pb-16.5">
        <div className="flex flex-col md:flex-row items-center gap-6.75 mb-15">
            <h2 onClick={() => {
							setActiveCategory(null);
							setVisibleCount(9);
						}} 
						className="cursor-pointer uppercase bg-title-portfolio bg-clip-text text-transparent font-bold text-xl md:text-xxl tracking-[3.5%]">{t("home.project.title_section")}</h2>
						<span className="w-px h-10.5 border-right-gold-radial hidden md:block"></span>
						{
							LIST_CATEGORIES.length > 0 && (
								<ul className="pl-0 mb-0 flex">
									{
										LIST_CATEGORIES.map((category: TCategory, index: number) => (
											<li 
												key={`cat-${category.id}`}>
													<span 
													onClick={() => {
														setActiveCategory(
															activeCategory === category.id ? null : category.id
														);
														setVisibleCount(9);
													}}
													className={`uppercase font-normal text-sm md:text-md cursor-pointer underline underline-offset-6 decoration-[0.5px] ${activeCategory === category.id ? "bg-title-portfolio bg-clip-text text-transparent" : ""}`}>{category.category}</span>
													{
														index + 1 != LIST_CATEGORIES.length && (<span className="mx-2">-</span>)
													}
											</li>
										))
									}
								</ul>
							)
						}
						
        </div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 2xl:gap-x-35.75 2xl:gap-y-17.25">
					{filteredProjects.slice(0, visibleCount).map((item: TProject) => (
						<ProjectItem
							key={`project_${item.id}`}
							project={item}
							onSelect={setSelectedProject}
						/>
					))}
				</div>
				{visibleCount < filteredProjects.length && (
					<div className="flex justify-center mt-10">
						<button
							onClick={() => setVisibleCount(prev => prev + 9)}
							className="px-6 py-2 border border-white rounded-full text-white hover:bg-title-portfolio hover:border-transparent transition cursor-pointer"
						>
							{t("home.project.view_more")}
						</button>
					</div>
				)}
				<ProjectModal
					project={selectedProject}
					onClose={() => setSelectedProject(null)}
				/>
			</div>
    </section>
  )
}

export default ProjectsSection
