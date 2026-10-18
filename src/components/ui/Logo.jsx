import logo from '../../assets/logo.png';

// AS monogram (transparent PNG)
export default function Logo({ size = 44, className = '' }) {
  return <img src={logo} width={size} height={size} alt="" className={className} draggable={false} />;
}
