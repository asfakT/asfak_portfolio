import { Navigate } from 'react-router-dom';
import { labPath, readingOrder } from '../components/Lab/labUtils';
import { labItems, labTopics } from '../data/lab';

// /lab has no page of its own: it opens the docs layout at the first entry in reading order.
export default function LabPage() {
  const [first] = readingOrder(labItems, labTopics);
  return <Navigate to={first ? labPath(first) : '/'} replace />;
}
