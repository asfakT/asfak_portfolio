import { Link } from 'react-router-dom';
import EditorialSection from '../ui/EditorialSection';
import SectionHeader from '../ui/SectionHeader';
import LabCard from './LabCard';
import { labItems, labSubtitle } from '../../data/lab';

export default function Lab() {
  return (
    <EditorialSection id="lab">
      <SectionHeader number="10" label="learning lab" title="Learning" titleEm="Lab" subtitle={labSubtitle} />

      {/* The 3 newest entries */}
      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {labItems.slice(0, 3).map((item) => (
          <LabCard key={item.id} item={item} />
        ))}
      </div>

      <Link
        to="/lab"
        className="mt-14 inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-[13px] text-sm transition-colors hover:border-cream/50 hover:text-peach"
      >
        View All ({labItems.length}) <span className="text-copper">→</span>
      </Link>
    </EditorialSection>
  );
}
