import { FC } from "react";
import styles from "./FilterButtons.module.scss";

interface FilterButtonsProps {
  currentFilter: "all" | "active" | "completed";
  onFilterChange: (filter: "all" | "active" | "completed") => void;
}

const filters: { key: "all" | "active" | "completed"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "active", label: "Active" },
  { key: "completed", label: "Completed" },
];

export const FilterButtons: FC<FilterButtonsProps> = ({
  currentFilter,
  onFilterChange,
}) => {
  return (
    <div className={styles.functionBtn}>
      {filters.map((filter) => (
        <button
          key={filter.key}
          className={currentFilter === filter.key ? styles.active : ""}
          onClick={() => onFilterChange(filter.key)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};
