import ChatIcon from '../assets/icon-chat.webp';
import IconMoney from '../assets/icon-money.webp';
import IconSecurity from '../assets/icon-security.webp';
import FeatureItem from '../components/FeatureItem'; // Importer le nouveau composant

export default function Features() {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>

            <FeatureItem
                icon={ChatIcon}
                title="You are our #1 priority"
                text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
                altText="Chat Icon"
            />

            <FeatureItem
                icon={IconMoney}
                title="More savings means higher rates"
                text="The more you save with us, the higher your interest rate will be!"
                altText="Money Icon"
            />

            <FeatureItem
                icon={IconSecurity}
                title="Security you can trust"
                text="We use top of the line encryption to make sure your data and money is always safe."
                altText="Security Icon"
            />
        </section>
    );
}
