import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";


const paymentPolicy = ({ location }) => {
    const { pathname } = location;

    return (
        <Fragment>
            <MetaTags>
                <title>Flone | About us</title>
                <meta
                    name="description"
                    content="About page of flone react minimalist eCommerce template."
                />
            </MetaTags>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
                About us
            </BreadcrumbsItem>
            <LayoutOne headerTop="visible">



                <div className="container">
                    <div className="welcome-content">
                        <div><p><strong>Politică Cookies</strong></p>
                            <p><strong>&nbsp;</strong></p>
                            <p><strong>VĂ RUGĂM SĂ CONSULTAȚI CU ATENȚIE PREZENTA POLITICĂ REFERITOARE LA FIȘIERE DE TIP ”COOKIES” ȘI TEHNOLOGII SIMILARE ÎNAINTE DE UTILIZAREA ACESTUI SITE SAU A APLICAȚIEI. </strong></p>
                            <p>&nbsp;</p>
                            <p>Ultima actualizare s-a efectuat la data de 26 noiembrie 2020.</p>
                            <p><strong>&nbsp;</strong></p>
                            <ol>
                                <li><strong>Ce sunt fișierele de tip ”cookies”?</strong></li>
                            </ol>
                            <p>Fișierele de tip ”cookies” sunt fișiere de mici dimensiuni care conțin litere și cifre care pot fi plasate pe dispozitivul dvs. în momentul în care vizitați un website sau utilizați o aplicație. Utilizăm fișiere de tip ”cookies” în scopul îmbunătățirii experienței dvs. în legătură cu Serviciile noastre prin reținerea preferințelor dvs.. De exemplu, pe numeroase website-uri de comerț electronic, dacă adăugați un articol într-un coș de cumpărături online fără să finalizați comanda, data viitoare când veți vizita același website, puteți vedea același articol în coșul de cumpărături. Acesta este un exemplu cu privire la modalitatea în care sunt utilizate fișierele de tip ”cookies” pentru a reține preferințele dvs. Fără utilizarea fișierelor de tip ”cookies”, experiența dvs. legată de Serviciile noastre va fi mai puțin prietenoasă pentru utilizator.</p>
                            <p>Pentru informații suplimentare referitoare la fișierele de tip ”cookies”, a se vedea <span><a href="http://www.allaboutcookies.org">www.allaboutcookies.org</a></span>.</p>
                            <ol start="2">
                                <li><strong>Care sunt motivele pentru care utilizăm fișiere de tip ”cookies”?</strong></li>
                            </ol>
                            <p>Fișierele de tip ”cookies” îndeplinesc anumite funcții, inclusiv facilitarea navigării și stocarea preferințelor dvs., pentru a vă prezenta un conținut relevant și pentru a îmbunătăți experiența dvs. generală în calitate de utilizator.</p>
                            <p>Utilizăm fișiere de tip ”cookies”:</p>
                            <ul>
                                <li>pentru gestionarea preferințelor dvs. și pentru îmbunătățirea anumitor funcții din cadrul Serviciilor noastre. Această activitate ar putea include colectarea de informații referitoare la data și ora vizitei dvs., istoricul dvs. de navigare și la preferințele legate de limbă.</li>
                                <li>pentru sprijinirea măsurilor noastre de securitate și detectarea oricăror activități frauduloase;</li>
                                <li>pentru analizarea modului în care sunt accesate sau utilizate Serviciile noastre și a performanței acestora. Utilizăm aceste informații în scopul menținerii, operării și îmbunătățirii permanente a Serviciilor noastre.</li>
                                <li>pentru transmiterea de mesaje publicitare relevante pentru dvs., deoarece fișierele de tip ”cookies” ne ajută să selectăm mesajele publicitare pe care le vizualizați și să măsurăm eficacitatea acestora.</li>
                            </ul>
                            <p>&nbsp;</p>
                            <ol start="3">
                                <li><strong>Ce fel de fișiere de tip ”cookies” și de alte tehnologii folosim? </strong></li>
                            </ol>
                            <p>Serviciile noastre utilizează următoarele categorii de fișiere de tip ”cookies” și tehnologii:</p>
                            <ul>
                                <li><strong>fișiere de tip ”cookies” permanente</strong> – aceste fișiere de tip ”cookies” sunt stocate în browser-ul echipamentului dvs. și sunt utilizate în orice moment în care accesați Serviciile noastre. Aceste fișiere de tip ”cookies” ne ajută să ne reamintim setările și preferința/preferințele dvs., pentru a face ca următoarea dvs. vizită să fie mai agreabilă. De exemplu, aceste fișiere de tip ”cookies” vor garanta faptul că nu va trebui să vă autentificați din nou. Își vor aminti de asemenea preferințele legate de limbă ale utilizatorilor în momentul următoarei vizite a acestora.</li>
                                <li><strong>Cookie-urile de sesiune</strong> – acestea sunt fișiere temporare de tip ”cookies” care rămân în arhiva cu fișiere de tip ”cookies” din browser-ul dvs. până în momentul în care ieșiți de pe Serviciile noastre. Informațiile primite de noi prin utilizarea acestor fișiere de tip ”cookies” ne ajută să analizăm tiparele de trafic web, dându-ne posibilitatea să identificăm și să soluționăm problemele și să vă oferim o experiență de navigare îmbunătățită.</li>
                                <li><strong>Cooki-urile publicitare </strong>- aceste fișiere de tip ”cookies” ne ajută să vă oferim mesaje publicitare relevante pentru dvs. și să măsurăm performanța campaniilor agenților publicitari prin analizarea interacțiunilor dvs. cu mesajele publicitare ale acestor agenți. De exemplu, acestea ne ajută să stabilim de câte ori au dat click utilizatorii pe un anunț al unui agent publicitar și de câte ori au vizitat website-ul agentului respectiv.</li>
                                <li><strong>Balize web</strong> <strong>(<em>web beacons</em>) </strong>– acestea sunt imagini grafice de mici dimensiuni (cunoscute și sub denumirea de “<em>pixel tags</em>” sau “<em>clear GIFs</em>”). Utilizăm balize web împreună cu fișierele de tip ”cookies” pentru identificarea utilizatorilor noștri și a comportamentului acestora.</li>
                                <li><strong>Amprentarea dispozitivului</strong> – această tehnică implică combinarea anumitor informații colectate de noi de pe dispozitivele de pe care utilizatorii noștri accesează Serviciile noastre. În momentul în care navigați pe website-ul nostru sau utilizați aplicația noastră mobilă, obținem anumite informații de la și în legătură cu dispozitivul dvs. și configurația acestuia, cum ar fi adresa dvs. IP, domeniul de țară al OLX utilizat de dvs. setările privind limba din dispozitivul dvs., marca și tipul dispozitivului, sistemul de operare și versiunea dispozitivului dvs., tipul și versiunea de browser, precum și informații specifice referitoare la software-ul dispozitivului dvs. Pe baza acestor informații referitoare la dispozitivul utilizatorului, creăm o anumită amprentă a dispozitivului. Informațiile referitoare la dispozitiv și amprenta acestuia obținute de noi nu sunt unice și reprezintă mai degrabă un set de informații care indică anumite informații particulare referitoare la dispozitivul utilizat pentru accesarea Serviciilor noastre la un moment dat. Nu putem identifica un utilizator exclusiv pe baza informațiilor colectate cu privire la dispozitivul acestuia. Aceste informații privind dispozitivul ne dau posibilitatea de a asocia conturile utilizatorilor cu un anumit scor de fraudă pe baza unui proces parțial automatizat, utilizând algoritmi în combinație cu analize efectuate de factorul uman și cu activități de moderare. În cazul în care scorul de fraudă indică faptul că un anumit cont de utilizator este foarte probabil să fie fraudulos, vom interzice respectivul utilizator și contul acestuia. Informațiile obținute de noi în cadrul acestui proces sunt utilizate exclusiv în scopuri legate de siguranța și securitatea clienților și de prevenirea fraudelor și sunt supuse unor drepturi de acces extrem de restrictive acordate specialiștilor selectați responsabili de siguranța și securitatea clienților din cadrul OLX. Nu partajăm aceste informații cu terți. Utilizarea acestei tehnici de amprentare a dispozitivului este necesară pentru a ține pasul cu evoluțiile în permanentă schimbare din domeniul fraudei online și pentru a ne asigura de faptul că Serviciile noastre sunt sigure și securizate pentru utilizatorii noștri. Pentru informații suplimentare referitoare la demersurile pe care le puteți întreprinde în situația în care considerați că contul dvs. a fost interzis în mod nejustificat, vă rugăm să&nbsp; consultați <span><a href="https://ajutor.olx.ro/hc/ro/articles/360000012640"><strong>Politica noastră de confidențialitate</strong></a></span>.</li>
                            </ul>
                            <p>&nbsp;</p>
                            <p>Este posibil ca Serviciile noastre să conțină link-uri către website-uri sau aplicații aparținând unor terți, inclusiv către cele ale partenerilor noștri. Vă rugăm să aveți în vedere faptul că și aceste website-uri ale terților ar putea utiliza fișiere de tip ”cookies”. Nu deținem controlul asupra acestor website-uri ale terților și nu suntem răspunzători pentru fișierele de tip ”cookies” instalate sau accesate de aceștia. În cazul în care dați click pe unul dintre aceste link-uri sau aplicații, vă rugăm să aveți în vedere faptul că fiecare dintre acestea are propria politică privind fișierele de tip ”cookies”. Prin urmare, vă rugăm să consultați politica privind fișierele de tip ”cookies” a altor site-uri sau aplicații de pe internet înainte de a le utiliza.</p>
                            <p>&nbsp;</p>
                            <ol start="4">
                                <li><strong>Deținem fișiere de tip ”cookies” sau plugin-uri aparținând terților în cadrul Serviciilor noastre?</strong></li>
                            </ol>
                            <p>Persoanele terțe, cum ar fi rețelele publicitare și furnizorii de servicii externe, precum analiza traficului web, pot utiliza fișiere de tip ”cookies”, balize web, seturi de dezvoltare software (SDK) sau tehnologii similare pentru colectarea informațiilor referitoare la vizitele dvs. pe Serviciilor noastre. Informațiile sunt utilizate pentru a vă oferi mesaje publicitare mai relevante în cadrul Serviciilor noastre sau în orice alt loc de pe internet. Nu deținem controlul asupra utilizării acestor fișiere de tip ”cookies” ale terților, care sunt guvernate de politicile terților respectivi privind confidențialitatea/fișierele de tip ”cookies”.</p>
                            <p>Vă prezentăm în cele ce urmează terții cărora la permitem să instaleze fișiere de tip ”cookies” sau alte tehnologii pe dispozitivele dvs.</p>
                            <p><strong>Partenerii din domeniul analitic</strong>: Pentru o mai bună înțelegere a modalității în care utilizați Serviciile noastre, conlucrăm cu diferiți parteneri din domeniul analitic. Le permitem partenerilor din domeniul analitic, cum ar fi Google și Facebook, să utilizeze fișiere de tip ”cookies”, SDK-uri și alte tehnologii conexe. Pentru informații suplimentare referitoare la modalitatea de utilizare a datelor dvs. de către Google și Facebook, vă rugăm să accesați: <span><a href="https://www.google.com/policies/technologies/partner-sites/">https://www.google.com/policies/technologies/partner-sites/</a></span>, <span><a href="https://www.facebook.com/about/privacy/update.">https://www.facebook.com/about/privacy/update.</a></span></p>
                            <p><strong>Partenerii din domeniul publicitar</strong>: Partenerii noștri din domeniul publicitar, cum ar fi DoubleClick, Criteo, RTB House, Index Exchange, OpenX etc., pot utiliza fișiere de tip ”cookies” pentru efectuarea de analize a vizitatorilor și ”cookies” publicitare pentru comunicarea anunțurilor pe care aceștia le consideră ca având cel mai înalt nivel de probabilitate&nbsp; de a prezenta interes pentru dvs. și pentru măsurarea eficacității unor astfel de anunțuri în cadrul Serviciilor noastre. Veți regăsi în cele ce urmează explicații referitoare la modul în care puteți controla personalizarea și urmărirea anunțurilor. În cazul în care dezactivați anunțurile personalizate, vi se vor transmite în continuare anunțuri generice din cadrul Serviciilor noastre.</p>
                            <p>&nbsp;</p>
                            <p><strong>Plugin-uri ale terților</strong>:</p>
                            <p>Serviciile noastre utilizează de asemenea plugin-uri ale terților în forma unui buton de partajare pe Facebook, Twitter și WhatsApp. Cu ajutorul acestui buton de partajare, puteți partaja listările noastre de anunțuri referitoare la servicii ale terților cu condiția că sunteți conectat la aceste terțe persoane. Acești terți pot avea posibilitatea de a conecta interacțiunea dvs. cu Serviciile noastre la contul dvs. deschis la aceștia. Prin urmare, vă rugăm să consultați politicile de confidențialitate ale acestor terți înainte de a apăsa pe butonul de partajare.</p>
                            <p>&nbsp;</p>
                            <ol start="5">
                                <li><strong>Ce demersuri puteți întreprinde pentru a șterge, dezactiva sau bloca fișierele de tip ”cookies”?</strong></li>
                            </ol>
                            <p>În cadrul Serviciilor noastre, vă vom oferi control deplin și posibilitatea de a renunța în orice moment la utilizarea oricăror plugin-uri sau dispozitive ale terților care se conectează la serverele unui furnizor de servicii extern. În momentul în care dați click pe butonul ”Află mai multe &amp; administrează setările” (“<em>Learn more &amp; manage settings</em>”) afișat în banner-ul cookie, veți putea accesa funcția de administrator a preferințelor. Acolo veți găsi o listă a partenerilor noștri din domeniul publicitar și a altor furnizori, precum și scopurile în care recurgem la acești furnizori. Dacă doriți să vă administrați setările referitoare la consimțământ, puteți face acest lucru accesând setările referitoare la cookies, pe care le puteți găsi în nota de subsol din partea de jos a website-ului nostru.</p>
                            <p>Vă rugăm să aveți în vedere faptul că funcția de administrare a preferințelor ca atare este pusă la dispoziție de unul dintre furnizorii noștri de servicii și va necesita transmiterea anumitor date (adresa IP și ID-ul utilizatorului) către furnizorul respectiv. În acest sens, va fi necesară setarea unui cookie. Aceste date vor fi transmise ulterior către partenerul publicitar sau către alt furnizor în vederea înregistrării faptului dacă v-ați dat consimțământul sau nu. Dat fiind faptul că noi trebuie să lansăm un fișier de tip ”cookie” pentru a reține setările dvs. de confidențialitate și aspectele la care ați renunțat, vă reamintim că toate setările referitoare la cookies vor fi pierdute în eventualitatea în care decideți să ștergeți fișierul de tip ”cookie” referitor la preferințe.</p>
                            <p>Chiar dacă aspectele menționate mai sus se referă doar la fișiere de tip ”cookies” și dispozitive ale terților, puteți dezactiva și utilizarea în general a fișierelor de tip ”cookies”. Browser-ul dvs. vă va furniza de regulă informații referitoare la modalitatea în care puteți refuza, șterge sau bloca fișierele de tip ”cookies”. Link-urile de mai jos vă vor conduce către informații cu privire la unele dintre browser-ele utilizate cel mai frecvent:</p>
                            <ul>
                                <li><span><a href="https://support.google.com/chrome/answer/95647?hl=en-GB">Google Chrome</a></span></li>
                                <li><span><a href="https://support.microsoft.com/en-in/help/17442/windows-internet-explorer-delete-manage-cookies">Internet Explorer</a></span></li>
                                <li><span><a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences">Mozilla Firefox</a></span></li>
                                <li><span><a href="https://support.apple.com/en-in/guide/safari/manage-cookies-and-website-data-sfri11471/mac">Safari</a></span></li>
                                <li><span><a href="https://www.opera.com/help/tutorials/security/privacy/">Opera</a></span></li>
                            </ul>
                            <p>Puteți renunța la fișierele de tip ”cookies” aparținând terților de pe Google Analytics, cu ajutorul <span><a href="about:blank">setărilor privind anunțurile</a></span> sau prin intermediul <span><a href="https://adssettings.google.com">https://adssettings.google.com</a></span></p>
                            <p>Puteți renunța la fișiere de tip ”cookies” pentru analiza vizitatorilor bazate pe interes instalate de serverele de anunțuri participante cu ajutorul următoarelor website-uri susținute de Alianța pentru Publicitate Digitală:</p>
                            <ul>
                                <li><span><a href="http://youradchoices.com">http://youradchoices.com</a></span></li>
                                <li><span><a href="http://www.youronlinechoices.com">http://www.youronlinechoices.com</a></span></li>
                                <li><span><a href="http://optout.aboutads.info">http://optout.aboutads.info</a></span></li>
                            </ul>
                            <p>În afară de aceasta, puteți schimba setările dispozitivului dvs. de așa manieră încât să controlați dacă vizualizați sau nu mesajele publicitare bazate pe interes.</p>
                            <p><strong>Vă rugăm să aveți în vedere faptul că: </strong>În cazul în care doriți să blocați fișierele de tip ”cookies” instalate de noi în cadrul Serviciilor noastre, e posibil să nu mai puteți accesa toate sau o parte din Serviciilor noastre. De exemplu, este posibil să nu mai puteți salva setările personalizate, cum ar fi informațiile de conectare.</p>
                            <p>&nbsp;</p></div>

                    </div>
                </div>




            </LayoutOne>
        </Fragment>
    );
};

paymentPolicy.propTypes = {
    location: PropTypes.object
};

export default paymentPolicy;
