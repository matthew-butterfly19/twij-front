import React from 'react';
import Card from '@components/Card/Card';

import styles from './Dashboard.module.scss';

const Dashboard = (): JSX.Element => {
  const content = (
    <div>
      Projekt ma na celu stworzenie aplikacji do przeprowadzania quizów. Prowadzący logując się do panelu może z jego poziomu tworzyć nowe quizy wprowadzając pytania wraz z określoną liczbą punktów za poprawną odpowiedź.
      <br/>Następnie określa termin rozpoczęcia i zakończenia quizu i wprowadza adresy
      e-mail na które rozesłany ma zostać specjalnie wygenerowany, unikatowy dla każdego studenta link aktywacyjny do quizu.
      <br/>
      <br/>
      Prowadzący po przeprowadzonym quizie ma dostęp do wyników poszczególnych studentów, a także do zbiorowych wyników, żeby móc łatwiej zorientować się jakie wyniki osiągneła cała grupa.
<br/>
<br/>
      Student otrzymuje na swoją skrzynkę pocztową link do quizu, który dostępny jest dopiero w czasie który został określony przez prowadzącego wprowadzającego quiz. Po zakończeniu quizu studentowi wyświetlana jest ilość zdobytych przez niego punktów.
    </div>
  );

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>

      </div>
      <Card header={'Opis projektu'} content={content} />
      <Card header={'Autorzy'} content={'Mateusz Motyl, Łukasz Koperwas'} />
    </div>
  );
}

export default Dashboard;
