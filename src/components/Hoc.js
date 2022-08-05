const withConditionalFeedback = (Component) => (props) => {
  if (props.isLoading) return <div>Loading data.</div>;
  if (!props.data) return <div>No data loaded yet.</div>;
  if (!props.data.length) return <div>Data is empty.</div>;

  return <Component {...props} />;
};

export const App = () => {
  const { data, isLoading } = { data: [1, 2, 3, 4, 5], isLoading: true };

  return <TodoList data={data} isLoading={isLoading} />;
};

const BaseTodoList = ({ data }) => {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const TodoList = withConditionalFeedback(BaseTodoList);
