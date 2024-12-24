export function TaskForm (){
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">新しいタスクを追加</h2>
  
      <form>
        {/* タイトル入力フィールド */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">タイトル</label>
          <input
            type="text"
            id="title"
            placeholder="タスクのタイトルを入力"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
  
        {/* 締切入力フィールド（任意） */}
        <div className="mb-6">
          <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">締切（任意）</label>
          <input
            type="date"
            id="dueDate"
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
  
        {/* 詳細入力フィールド（任意） */}
        <div className="mb-6">
          <label htmlFor="details" className="block text-sm font-medium text-gray-700">詳細（任意）</label>
          <textarea
            id="details"
            placeholder="タスクの詳細を入力"
            rows={4}
            className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
  
        {/* 追加ボタン */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          タスクを追加
        </button>
      </form>
    </div>
  );  
}