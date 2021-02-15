import React from 'react';
import Card from '@components/Card/Card';

import styles from './Dashboard.module.scss';

const Dashboard = (): JSX.Element => {
  const content = (
    <div>
      Celem projektu było stworzenie aplikacji która umożliwi stworzenie i przeprowadzenie quizu.
      <br/><br/>
      Aplikacja posiada interfejs w którym w łatwy sposób można wprowadzić pytania dla danego zagadnienia, zaznaczyć która z odpowiedzi jest prawidłowa oraz ustawić ilosć punktów do zdobycia za dobrą odpowiedź. Pytania te można w łatwy sposób modyfikować czy też usunąć całą pulę.
      <br/><br/>
      Administrator ma do dyspozycji również interfejs służący do zaplanowania quizu w którym może określić kiedy ma rozpoczać się quiz, ile czasu będzie miał użytkownik na jego rozpoczęcie a także czas trwania quizu i pytania które mają się w nim zawierać. Administrator wprowadza pulę adresów email na które rozesłane mają być specjalnie wygenerowane, unikalne dla każdego studenta linki aktywacyjne do quizu.
      <br/><br/>
      Student po otrzymaniu linku aktywacyjnego na swoją skrzynkę odbiorczą wypełnia quiz. Po zakończeniu quizu wyniki poszczególnych studentów dostępne są dla prowadzącego w zakładce "Historia". W zakładce tej wyświetlane są punkty zdobyte przez studenta, jego odpowiedzi na poszczególne pytania a także status quizu.
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
