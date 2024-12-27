import { Header } from "./components/Header";
import { fetchData } from "./utils/fetchData";



const Home = async () => {
  const tasks = await fetchData();

  const calcdays = function(task_id:number){
    if (tasks){
      const task = tasks[task_id];
      if (task && task.deadline !==undefined){
        const now_date = new Date();
        now_date.setHours(0,0,0,0)
        const task_date = new Date(task.deadline);
        task_date.setHours(0,0,0,0)
        console.log((now_date.getTime()-task_date.getTime())/(1000 * 60 * 60 * 24),"残り日程");
        return (now_date.getTime()-task_date.getTime())/(1000 * 60 * 60 * 24);
      }else{
        return null
      }
    }
  };
  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-semibold text-center mb-6">現在のタスク</h1>
        <div className="space-y-4">
          {tasks?.length === 0 ? (
            <p className="text-center text-lg">タスクはありません。</p>
          ) : (
            tasks?.map((task) => (
              <div
                key={task.id}
                className={`p-4 border rounded-lg shadow-md 
                }`}
              >
                <h2 className="text-xl font-bold">{task.title}</h2>
                {task.description && (
                  <p className="text-gray-600 mt-2">{task.description}</p>
                )}
                <p className="text-gray-500 mt-2">
                  締切:{ task.deadline } <span className="text-sm">残り:{calcdays(task.id)}</span>
                </p>
                <p
                  className={`mt-2 font-semibold 
                  }`}
                >
                  
                </p>
  
                {/* 完了ボタン */}
                <button
                  className={`mt-4 px-4 py-2 rounded-lg`}
                >
                  完了にする
                </button>
  
                {/* 削除ボタン */}
                <button
                  className="mt-4 ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  削除
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
  
};

export default Home;