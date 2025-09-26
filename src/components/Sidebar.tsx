import type { FC } from 'react';
import '../styles/sidebar.css';

type SidebarProps = {
  sections: { id: string; label: string; children?: { id: string; label: string }[] }[];
  activeSection: string;
  onSelect: (id: string) => void;
};

const Sidebar: FC<SidebarProps> = ({ sections, activeSection, onSelect }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">安责险管理平台</div>
      <nav>
        {sections.map((section) => {
          const isGroupActive =
            activeSection === section.id || section.children?.some((child) => child.id === activeSection);

          return (
            <div key={section.id} className="sidebar__group">
            <button
              type="button"
              className={`sidebar__link ${isGroupActive ? 'is-active' : ''}`}
              onClick={() => onSelect(section.children?.[0]?.id ?? section.id)}
            >
              {section.label}
            </button>
            {section.children && (
              <div className="sidebar__sublist">
                {section.children.map((child) => (
                  <button
                    key={child.id}
                    type="button"
                    className={`sidebar__sublink ${activeSection === child.id ? 'is-active' : ''}`}
                    onClick={() => onSelect(child.id)}
                  >
                    {child.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
