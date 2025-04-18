
const FlipEmailForm = ({ onClick }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center opacity-100 transition-opacity duration-300 bg-stone-900 border rounded-md border-stone-800">
      <h2 className="text-3xl text-gray-300 mb-4">Hooray! 🎉</h2>
      <p className="text-xl text-gray-400">I got your message!</p>
      <p className="text-gray-400 mt-2">I'll get back to you soon.</p>
      <button
        onClick={onClick}
        className="mt-6 py-2 px-4 text-white rounded transition duration-600 bg-gradient-to-r from-sky-500 to-sky-700 hover:from-sky-700 hover:to-sky-500">
        Send another message
      </button>
    </div>
  )
};

export default FlipEmailForm
