import GithubActivity from './GithubActivity';
import SystemInfo from './SystemInfo';
import ContactWidget from './ContactWidget';
import MusicWidget from './MusicWidget';

export default function Feed() {
    return (
        <div className="space-y-6">
            <GithubActivity />
            <SystemInfo />
            <ContactWidget />
            <MusicWidget />
        </div>
    );
}
