// 함수 컴포넌트 정의
const Greeting = () => {
  return (
    <h1 className="greeting">
      Hello world!
    </h1>
  );
};

// React 18의 createRoot를 사용하여 컴포넌트를 root에 렌더링
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);
