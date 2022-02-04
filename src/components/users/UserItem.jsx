import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card card-compact bg-base-200">
      <div className="flex-row items-center space-x-4 card-body card card-bordered">
        <div className="card-bordered flex items-center	">
          <div className="avatar">
            <div className="rounded-full shadow w-16 h-16">
              <img src={avatar_url} alt="Profile" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{login}</h2>
          <Link
            className="text-base-content text-opacity-40"
            to={`/user/${login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
