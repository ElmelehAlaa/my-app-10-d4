import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const CompaniesFav = (props) => {
  const companiesFavorites = useSelector((state) => state.CompaniesFav.content);
  return (
    <ListGroup>
      {companiesFavorites.map((company, i) => (
        <ListGroup.Item key={i}> {company.company_name}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};
export default CompaniesFav;
