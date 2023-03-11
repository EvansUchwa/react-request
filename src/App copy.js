import useTodos from "./hooks/useTodos";

function App() {
  const { todos, todosLoading, todosError, todosRefetch } = useTodos();

  if (todosLoading) {
    return <h1>On charge les datas............</h1>
  }
  if (todosError) {
    return <h1>Une erreur s'est produite pendant la recup des datas</h1>
  }
  return (
    <div className="App">
      <h1>Bienvenue sur l'application de fetch en React</h1>
      <button onClick={todosRefetch}>Cliquer pour refetch</button>
      <section style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        {
          todos.length > 0 ? <>
            {
              todos.map((item, i) => <article key={'artcle nb' + i} style={{
                backgroundColor: '#efefef',
                padding: '20px',
                borderRadius: '20px'
              }} >
                <p>
                  <b>Id :</b> {item.id}
                </p>
                <p>
                  <b>Titre :</b> {item.title}
                </p>
              </article>)
            }
          </> : 'Aucune donnees disponible'
        }
      </section>

    </div>
  );
}

export default App;
