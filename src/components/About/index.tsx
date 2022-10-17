import { FC } from 'react';
import { Container } from 'components/Container/Container';
import styles from './style.module.scss';
import pinkSperm from 'assets/img/about/bigPinkSperm.png';
import pinkSperm2 from 'assets/img/about/pink-sperm2.png';
import pinkSperm3 from 'assets/img/about/pink-sperm3.png';
import { IAbout } from 'types';


export const About: FC<IAbout> = ({ onScreen }) => {
    return (
        <section className={styles.about}>
            <Container>
                <h2 className={styles.about__title}>ТЕКСТ СООБЩЕНИЯ</h2>
                <div className={styles['about__main-block']}>
                    <p className={styles['main-block__text']}>
                        <span>Lorem ipsum dolor sit amet</span>, consectetur
                        adipiscing elit. Pellentesque ante ex, tempor eget
                        sollicitudin eget, tempor at nunc. Integer orci lectus,
                        suscipit non vulputate sit amet, aliquet sed dolor. In
                        efficitur ex in lacus vulputate imperdiet. Integer
                        finibus placerat vulputate. In ipsum arcu, ornare ac
                        congue fermentum, lacinia at dolor. Nulla dapibus justo
                        sed feugiat hendrerit. Quisque tincidunt, elit at
                        aliquet facilisis, mauris nibh lobortis est, at finibus
                        tellus lectus et diam. Ut accumsan vestibulum interdum.
                        Donec id libero posuere, mollis orci vitae, accumsan
                        nisi. Nam eu scelerisque elit, vitae vehicula magna.
                        Vestibulum commodo arcu eu sem blandit aliquet. Cras
                        fringilla hendrerit condimentum. Phasellus vitae nisi
                        tempor, egestas neque a, lobortis mauris. Integer
                        tincidunt, mi et vestibulum ultrices, sem mi faucibus
                        ligula, sed dapibus ipsum ante vel ante. Sed tincidunt
                        tempus tellus id imperdiet. Nullam malesuada sagittis
                        ullamcorper. Etiam nisi elit, porta vitae malesuada eu,
                        porta vitae eros. Donec viverra iaculis turpis a
                        convallis. Nullam eget luctus mi. Sed odio metus,
                        fringilla porta facilisis vitae, blandit quis ligula.
                        Maecenas pretium id lectus in commodo. Maecenas congue
                        tortor sed accumsan fermentum. Fusce volutpat vehicula
                        enim, ut pretium urna condimentum sit amet. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit.
                        Pellentesque ante ex, tempor eget sollicitudin eget,
                        tempor at nunc. Integer orci lectus, suscipit non
                        vulputate sit amet, aliquet sed dolor. In efficitur ex
                        in lacus vulputate imperdiet. Integer finibus placerat
                        vulputate. In ipsum arcu, ornare ac congue fermentum,
                        lacinia at dolor. tempus tellus id imperdiet. Nullam
                        malesuada sagittis ullamcorper. Etiam nisi elit, porta
                        vitae malesuada eu, porta vitae eros. Donec viverra
                        iaculis turpis a convallis. Nullam eget luctus mi. Sed
                        odio metus, fringilla porta facilisis vitae, blandit
                        quis ligula. Maecenas pretium id lectus in commodo.
                        Maecenas congue tortor sed accumsan fermentum. Fusce
                        volutpat vehicula enim, ut pretium urna condimentum sit
                        amet. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Pellentesque ante ex, tempor eget sollicitudin
                        eget, tempor at nunc. Integer orci lectus, suscipit non
                        vulputate sit amet, aliquet sed dolor. In efficitur ex
                        in lacus vulputate imperdiet. Integer finibus placerat
                        vulputate. In ipsum arcu, ornare ac congue fermentum,
                        lacinia at dolor.
                    </p>
                </div>
            </Container>
            <BackgroundSperm onScreen={onScreen} />
        </section>
    );
};



const BackgroundSperm = ({ onScreen }: { onScreen: boolean }) => {

    const bgImgClasses = `${styles['about__bg-img']}`;
    
    return (
        <>
            <img
                className={
                    onScreen
                        ? `${bgImgClasses}  ${styles['pink-sperm']} ${styles['active']}`
                        : `${bgImgClasses}  ${styles['pink-sperm']}`
                }
                src={pinkSperm}
                alt="pink_sperm"
            />

            <img
                className={
                    onScreen
                        ? `${bgImgClasses}  ${styles['pink-sperm2']} ${styles['active']}`
                        : `${bgImgClasses}  ${styles['pink-sperm2']}`
                }
                src={pinkSperm2}
                alt="pink_sperm"
            />
            <img
                className={
                    onScreen
                        ? `${bgImgClasses}  ${styles['pink-sperm3']} ${styles['active']}`
                        : `${bgImgClasses}  ${styles['pink-sperm3']}`
                }
                src={pinkSperm3}
                alt="pink_sperm"
            />
            <img
                className={
                    onScreen
                        ? `${bgImgClasses}  ${styles['pink-sperm4']} ${styles['active']}`
                        : `${bgImgClasses}  ${styles['pink-sperm4']}`
                }
                src={pinkSperm3}
                alt="pink_sperm"
            />
            <img
                className={
                    onScreen
                        ? `${bgImgClasses}  ${styles['pink-sperm5']} ${styles['active']}`
                        : `${bgImgClasses}  ${styles['pink-sperm5']}`
                }
                src={pinkSperm3}
                alt="pink_sperm"
            />
        </>
    );
};
