import './Avatar.scss';

function Avatar({ name }) {
  // Get the initials from the name

  if (!name || typeof name !== 'string') {
      return ''; 
  }
  
  const initials = name
      .trim() // remove leading and trailing spaces
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