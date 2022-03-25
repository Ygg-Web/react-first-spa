import {Button} from "../../Button";
import {WhiteBlock} from "../../WhiteBlock";
import styles from "./WelcomeStep.module.scss";

export const WelcomeStep = () => {
  return (
    <WhiteBlock className={styles.block}>
      <h3>
        <img className={styles.handWaveImg} src="/img/hand-emoji.png" alt="Celebration" />
        Welcome to Clubhouse!
      </h3>
      <p>
        We're working hard to get Clubhouse ready for everyone! While we wrap up
        the finishing youches, we're adding people gradually to make sure
        nothing breaks :)
      </p>
      <div>
        <Button>
          Get your username
          <img className="d-id ml-10" src="/img/arrow.svg"/>
        </Button>
      </div>
      <div className="link mt-15 cup d-id">Have an invite text? Sign in</div>
    </WhiteBlock>
  );
};
