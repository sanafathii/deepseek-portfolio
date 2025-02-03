export default function ProgressBar({ skill, percentage }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-[#1E293B] font-medium">{skill}</span>
        <span className="text-[#2563EB]">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-[#2563EB] rounded-full transition-all duration-1000"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
