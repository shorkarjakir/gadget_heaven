const Tabs = ({ cate, active, onClick }) => {
    return (
        <button
            className={`p-2 rounded-2xl font-semibold w-full text-left ${active ? "bg-fuchsia-600 text-white" : "bg-gray-200"}`}
            onClick={onClick}
        >
            {cate}
        </button>
    );
};

export default Tabs;