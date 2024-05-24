import { Container } from "./styles";

interface PaginationItemProps {
  pageNumber: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

const PaginationItem = ({
  pageNumber,
  isCurrent = false,
  onPageChange,
}: PaginationItemProps) => {
  if (isCurrent) {
    return (
      <Container>
        <button type="button" className="isCurrent" disabled>
          <p className="p6">{pageNumber}</p>
        </button>
      </Container>
    );
  }

  return (
    <Container>
      <button
        type="button"
        className="notCurrent"
        onClick={() => onPageChange(pageNumber)}
      >
        <p className="p6">{pageNumber}</p>
      </button>
    </Container>
  );
};

export default PaginationItem;
