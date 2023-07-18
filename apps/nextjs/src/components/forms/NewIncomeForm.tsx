export default function NewIncomeForm() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <label className="text-gray-500 text-sm">Income Name</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm"
                    />
                </div>
                <div className="flex flex-col ml-4">
                    <label className="text-gray-500 text-sm">Income Amount</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm"
                    />
                </div>
            </div>
        </div>
    )
}