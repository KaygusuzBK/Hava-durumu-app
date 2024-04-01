import Skeleton from "react-loading-skeleton";

export default function SkeletonCard() {
  return (
    <div className="card">
      <Skeleton height={200} />
      <div className="card-body">
        <Skeleton count={3} className="bg-white" />
      </div>
    </div>
  );
}
