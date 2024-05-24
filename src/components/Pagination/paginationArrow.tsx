import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { Next, Previous } from "./styles";

interface PaginationItemProps {
  pageNumber: number;
  onPageChange: (page: number) => void;
  previous?: boolean;
  disabled?: boolean;
}

const PaginationArrow = ({
  pageNumber,
  onPageChange,
  previous,
  disabled,
}: PaginationItemProps) => {
  if (previous) {
    return (
      <Previous $disabled={disabled} onClick={() => onPageChange(pageNumber)}>
        <CaretLeft />
      </Previous>
    );
  }

  return (
    <Next $disabled={disabled} onClick={() => onPageChange(pageNumber)}>
      <CaretRight />
    </Next>
  );
};

export default PaginationArrow;
