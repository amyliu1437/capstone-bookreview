import './Avatar.scss';

function Avatar({ name }) {
  // Get the initials from the name
  const initials = name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('')
    .substring(0, 2);

  return (
    <div className="avatar">
      {initials}
    </div>
  );
};

export default Avatar;