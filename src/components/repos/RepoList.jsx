import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

function RepoList({ repos }) {
  return (
    <div className="card-body">
      <h2 className="text-3xl my-4 font-bold card-title">
        Latest Respositories
      </h2>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
}

RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
