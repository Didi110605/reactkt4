import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="content">
      <h1>ТАКОЙ СТРАНИЦЫ НЕ СУЩЕСТВУЕТ (ERROR 404)</h1>
      <button onClick={() => navigate('/products')}>
        Вернуться к продуктам
      </button>
    </div>
  );
}

export default NotFoundPage;