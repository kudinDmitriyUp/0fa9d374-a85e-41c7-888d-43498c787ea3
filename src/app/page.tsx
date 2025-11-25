"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Crown, Gift, Heart, Sparkles, Star, TrendingUp } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
      contentWidth="small"
      sizing="small"
      background="circleGradient"
      cardStyle="solid-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="minimal"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="ONA KOJU NE PUŠTAJU"
          navItems={[
            { name: "Vodič", id: "guide" },
            { name: "Transformacija", id: "transformation" },
            { name: "FAQ", id: "faq" },
            { name: "Kontakt", id: "contact" }
          ]}
          button={{
            text: "POSTAJEM ONA",
            href: "pricing"
          }}
          className="bg-white/80 backdrop-blur-sm"
          navItemClassName="text-sm font-medium text-foreground"
          buttonClassName="bg-primary-cta hover:bg-opacity-90"
          buttonTextClassName="text-white font-semibold"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="ONA KOJU NE PUŠTAJU"
          description="Kompletan vodič koji te transformiše iz devojke koja ČEKA njegovu poruku — u devojku čiju poruku ON čeka. 4 vodiča. 1 transformacija. Od zbunjenosti do kontrole."
          buttons={[
            {
              text: "HOĆU PRISTUP ODMAH",
              href: "pricing"
            },
            {
              text: "SAZNAJ VIŠE",
              href: "guide"
            }
          ]}
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zRAoB2uzBPsO0cWMSBwpbjhOB/uploaded-1764111201187-wwuu4sk1.jpg",
              imageAlt: "Moćna žena samouverena"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zRAoB2uzBPsO0cWMSBwpbjhOB/uploaded-1764111201904-qega348n.jpg",
              imageAlt: "Žena transformacija snaga"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zRAoB2uzBPsO0cWMSBwpbjhOB/uploaded-1764111202652-zs1ax7lo.jpg",
              imageAlt: "Žena luksuz samopouzdanje"
            }
          ]}
          autoplayDelay={5000}
          showDimOverlay={true}
          className="min-h-screen"
          logoClassName="text-4xl md:text-6xl font-bold text-primary-cta"
          descriptionClassName="text-base md:text-lg text-foreground max-w-2xl"
          buttonClassName="px-6 py-3 rounded-lg font-semibold"
        />
      </div>

      <div id="pain-points" data-section="pain-points">
        <TestimonialCardThree
          title="Prepoznaješ ovo?"
          description="Ako je bar JEDNA od ovih pogodila — nisi luda. Nisi previše emotivna. Ti samo igraš igru čija pravila NIKO nikad nije objasnio."
          tag="REALNOST"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "pain-1",
              name: "Čekanje",
              handle: "@reality",
              testimonial: "Šalješ poruku. Čekaš. Refreshuješ. Ništa. Satima gledasš telefon dok on ne javlja odgovor."
            },
            {
              id: "pain-2",
              name: "Zbunjenost",
              handle: "@reality",
              testimonial: "On je topao jedan dan — hladan sledeći. Ti ne znaš gde si. Analiziraš svaku njegovu reč po noći."
            },
            {
              id: "pain-3",
              name: "Neravnomerna trka",
              handle: "@reality",
              testimonial: "Daješ SVE. On daje mrvice. I opet se pitaš šta NIJE u redu s tobom umesto sa njim."
            },
            {
              id: "pain-4",
              name: "Uvek prva",
              handle: "@reality",
              testimonial: "Javljaš se prva. Trudiš se više. A on... sve manje. Postaneš dostupna, a to ga čini hladnijim."
            },
            {
              id: "pain-5",
              name: "Ponavljanje",
              handle: "@reality",
              testimonial: "Pričaš drugaricama ISTU priču. Samo sa drugim likom. Osećaš se kao živi primer Sizefoove bolesti."
            },
            {
              id: "pain-6",
              name: "Gubitak sebe",
              handle: "@reality",
              testimonial: "Gubiš SEBE pokušavajući da ga ne izgubiš. Šta je moje mišljenje? Šta želim JA? Zaboravila si pitanja."
            }
          ]}
        />
      </div>

      <div id="transformation" data-section="transformation">
        <AboutPhoneTimeline
          tag="TRANSFORMACIJA"
          title="Problem nije ON. Problem je što TEBE niko nije naučio."
          description="Muška psihologija je NAUKA, ne misterija. Šta ga pokreće. Šta ga hladi. Šta ga VEZUJE. I šta ga tera da JURI — umesto da beži. Kad to shvatiš? Igra se menja. ZAUVEK."
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zRAoB2uzBPsO0cWMSBwpbjhOB/uploaded-1764111203425-4j706og8.jpg",
            imageAlt: "Transformacija ženske energije"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zRAoB2uzBPsO0cWMSBwpbjhOB/uploaded-1764111203425-4j706og8.jpg",
            imageAlt: "Moć znanja muške psihologije"
          }}
          buttons={[
            {
              text: "VIDIM RAZLIKU",
              href: "guide"
            }
          ]}
        />
      </div>

      <div id="guide" data-section="guide">
        <PricingCardOne
          title="5 Vodiča. 1 Transformacija."
          description="Kompletan sistem koji te vodi od zbunjenosti do kontrole"
          tag="KOMPLETAN PAKET"
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "main",
              badge: "GLAVNI VODIČ",
              badgeIcon: Crown,
              price: "47€",
              subtitle: "Šta muškarci zaista vole i žele",
              features: [
                "Muški jezik ljubavi (hint: nisu reči)",
                "Zašto se povlači kad pokažeš emocije",
                "5 stvari koje SVAKI muškarac želi",
                "Kako da aktiviraš njegov instinkt lovca",
                "Šta ga ZAISTA vezuje (nije seks, nije lepota)",
                "Psihologija toplo-hladno i kako je KORISTIŠ"
              ]
            },
            {
              id: "bonus1",
              badge: "BONUS #1",
              badgeIcon: Gift,
              price: "37€",
              subtitle: "BITCH / BAD BITCH ENERGY",
              features: [
                "Samopouzdanje koje se OSEĆA",
                "Granice koje ga PRIVLAČE",
                "Energija 'ja biram' — ne 'molim izaberi mene'",
                "Sirena efekat — misterija + ženstvenost + stav",
                "Kako je tvoje odsustvo jače od prisustva",
                "Rezultat: On te vidi kao IZAZOV, ne kao siguricu"
              ]
            },
            {
              id: "bonus2",
              badge: "BONUS #2",
              badgeIcon: Gift,
              price: "37€",
              subtitle: "ZAKON KRALJICE",
              features: [
                "18 najopasnih grešaka koje devojke rade",
                "Kako da PRESTANEŠ da se dokazuješ",
                "Kraljevska energija — šta je i kako se gradi",
                "Kako da on uloži PRE nego što ti uložiš",
                "Izlazak iz 'opcija' statusa — zauvek",
                "Rezultat: Postaneš ta kojoj se DAJE"
              ]
            },
            {
              id: "bonus3",
              badge: "BONUS #3",
              badgeIcon: Gift,
              price: "39€",
              subtitle: "20 ŽENSKIH GREŠAKA",
              features: [
                "Prevelika dostupnost (dostupnost = smrt privlačnosti)",
                "Preduge poruke i emotivni romani",
                "Drama iz nesigurnosti",
                "Prerano davanje (pažnja, lojalnost, trud)",
                "Spuštanje standarda čim se zaljubiš",
                "Gubitak sopstvenog života i interesa"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Brojke koje govore"
          description="Rezultati devojaka koje su promenile igru"
          tag="DOKAZI"
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          metrics={[
            {
              id: "1",
              value: "92%",
              title: "dinamike",
              description: "Klijenti uočavaju promenu u dinamici u roku od 14 dana",
              icon: TrendingUp
            },
            {
              id: "2",
              value: "5000+",
              title: "zadovoljnih",
              description: "Devojaka koje su vratile kontrolu u svoje odnose",
              icon: Heart
            },
            {
              id: "3",
              value: "89%",
              title: "rezultata",
              description: "Počinje da se trudi VIŠE posle primene vodiča",
              icon: Star
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="Devojke koje su promenile priču"
          description="Prava iskustva od devojaka kao ti"
          tag="СОЦИЈАЛНА ДОКАЗНА СРЕДСТВА"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Marina",
              handle: "@marina.28 | Beograd",
              testimonial: "Pre ovog vodiča sam bila ta koja se uvek prva javlja. Sad se ON pita zašto mu ne odgovaram odmah. Nisam znala da je TOLIKO prosto kad znaš kako.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zRAoB2uzBPsO0cWMSBwpbjhOB/uploaded-1764111204174-risqous3.jpg",
              imageAlt: "Marina iz Beograda"
            },
            {
              id: "2",
              name: "Jasna",
              handle: "@jasna.26 | Zagreb",
              testimonial: "Mislila sam da znam sve o muškarcima. Ispostavilo se da sam sve radila POGREŠNO. Ovo mi je otvorilo oči na stvari koje nisam ni pomišljala.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zRAoB2uzBPsO0cWMSBwpbjhOB/uploaded-1764111209865-wqojzj0r.jpg",
              imageAlt: "Jasna iz Zagreba"
            },
            {
              id: "3",
              name: "Anastazija",
              handle: "@anastazija.31 | Novi Sad",
              testimonial: "Konačno razumem zašto sam uvek birala iste tipove muškaraca. I konačno znam kako da to promenim zauvek. Ovo je trebalo davno.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zRAoB2uzBPsO0cWMSBwpbjhOB/uploaded-1764111210627-819cucnf.jpg",
              imageAlt: "Anastazija iz Novog Sada"
            },
            {
              id: "4",
              name: "Tamara",
              handle: "@tamara.24 | Sarajevo",
              testimonial: "Drugarice me pitaju šta se desilo sa mnom. Energija mi je drugačija, bolesnija, samozavisnija. Rekla sam im — kupite vodič. 😂 Sada smo sve zajedno.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zRAoB2uzBPsO0cWMSBwpbjhOB/uploaded-1764111211351-t8oskaqp.jpg",
              imageAlt: "Tamara iz Sarajeva"
            },
            {
              id: "5",
              name: "Petra",
              handle: "@petra.29 | Ljubljana",
              testimonial: "Stvarno sam mislila da sam nešto pogriješila sa sobom. Sad znam da je problem bila moja neznanja oko muške psihologije. Sve se promijenilo.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zRAoB2uzBPsO0cWMSBwpbjhOB/uploaded-1764111211842-zu09h1g4.jpg",
              imageAlt: "Petra iz Ljubljane"
            },
            {
              id: "6",
              name: "Milica",
              handle: "@milica.27 | Titograd",
              testimonial: "Posle vodiča shvatam koliko sam себя žrtvovala. Sada biram sebe prvi, a čudno — toliko više brine o meni. Energija privlači energiju.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zRAoB2uzBPsO0cWMSBwpbjhOB/uploaded-1764111212625-ates59yt.jpg",
              imageAlt: "Milica iz Titograda"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Često Postavljena Pitanja"
          description="Sve što trebate znati pre nego što počnete transformaciju"
          tag="PITANJA & ODGOVORI"
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Da li ovo radi za sve tipove muškaraca?",
              content: "DA. Muška psihologija je UNIVERZALNA. Bilo da je u pitanju stabilna veza, kombinacija, ili tek početak — principi su isti. Biologija ne pravi razliku između tipova."
            },
            {
              id: "2",
              title: "Nisam trenutno sa nikom. Da li mi ovo treba?",
              content: "POSEBNO ti treba. Bolje da naučiš pravila PRE nego što uđeš u sledeću situaciju. Ovaj put — SPREMNA. Nećeš više ponavljati iste greške."
            },
            {
              id: "3",
              title: "Koliko je dugačak materijal?",
              content: "5 vodiča, svaki 30-50 stranica PDF formata. Možeš sve pročitati za vikend. Primenjivati — ceo život. Materijal je konzaktan i lako primenjiv."
            },
            {
              id: "4",
              title: "Kad dobijem pristup?",
              content: "ODMAH. Posle uplate dobijaš email sa svim vodičima u PDF formatu. Za 2 minuta već čitaš. Nema čekanja, nema aktivacije."
            },
            {
              id: "5",
              title: "Šta ako ne bude radilo za mene?",
              content: "Ovo nije 'možda će raditi'. Ovo je muška psihologija — NAUKA. Ako primeniš vo — vidiće se rezultati. Garantujem."
            },
            {
              id: "6",
              title: "Da li je ovo manipulacija?",
              content: "NE. Ovo je RAZUMEVANJE. Kad razumeš kako neko funkcioniše, možeš da gradiš PRAVU konekciju — ne igrice. To je osnova zdravih odnosa."
            },
            {
              id: "7",
              title: "Mogu li koristiti ovo ako sam u braku?",
              content: "APSOLUTNO. Dinamika ostaje ista bez obzira na tip odnosa. Muškarcima je potrebno isto ono što je napisano — čak i nakon godina braka."
            },
            {
              id: "8",
              title: "Da li trebam dodatnu pomoć?",
              content: "Vodiči su osmišljeni da budu kompletan sistem. Međutim, nude se i grupne konsultacije kao dodatna opcija (ali nisu obavezne)."
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Šta dobijaš — Vrednost vs. Cena"
          description="197€ vrednosti za samo 27€ DANAS"
          tag="PONUDA"
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "package",
              badge: "SAMO DANAS",
              badgeIcon: Sparkles,
              price: "27€",
              subtitle: "Umesto regularne 88€ — 70% POPUSTA",
              features: [
                "✅ Glavni vodič (47€ vrednosti)",
                "✅ Bonus #1: BITCH Energy (37€ vrednosti)",
                "✅ Bonus #2: Zakon Kraljice (37€ vrednosti)",
                "✅ Bonus #3: 20 Grešaka (39€ vrednosti)",
                "✅ Instant PDF pristup",
                "✅ Doživotni pristup — UPDATE zauvek",
                "✅ Čitaj na bilo kom uređaju",
                "✅ Nema skrivenih troškovnih"
              ]
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Sprema li se transformacija?"
          description="POSTAJEM ONA KOJU NE PUŠTAJU — 27€ SAMO DANAS. Instant pristup. Bez čekanja. Posle uplate, email sa svim vodičima za 2 minuta."
          inputs={[
            {
              name: "ime",
              type: "text",
              placeholder: "Tvoje ime",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Tvoj email",
              required: true
            }
          ]}
          textarea={{
            name: "poruka",
            placeholder: "Koja pitanja imas? (opciono)",
            rows: 4,
            required: false
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35zRAoB2uzBPsO0cWMSBwpbjhOB/uploaded-1764111203425-4j706og8.jpg"
          mediaPosition="right"
          buttonText="POSTAJEM ONA — 27€"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="ONA KOJU NE PUŠTAJU"
          copyrightText="© 2025 NuleLove. Sva prava zadržana."
          columns={[
            {
              title: "Vodiči",
              items: [
                {
                  label: "Glavni Vodič",
                  href: "guide"
                },
                {
                  label: "Bonusi",
                  href: "guide"
                },
                {
                  label: "FAQ",
                  href: "faq"
                }
              ]
            },
            {
              title: "Resursi",
              items: [
                {
                  label: "Uslovi korišćenja",
                  href: "#terms"
                },
                {
                  label: "Politika privatnosti",
                  href: "#privacy"
                },
                {
                  label: "Kontakt",
                  href: "contact"
                }
              ]
            },
            {
              title: "Društvene mreže",
              items: [
                {
                  label: "Instagram",
                  href: "https://instagram.com"
                },
                {
                  label: "TikTok",
                  href: "https://tiktok.com"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}