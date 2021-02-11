import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ScheduleQuizHeader from "@domain/Quizes/ScheduleQuizModal/ScheduleQuizHeader/ScheduleQuizHeader";
import {actions, selectors, timeToStartUnitsEnum} from '@store/quizSchedule';
import {selectors as quizSettingsSelectors} from '@store/quizSettings';
import DateTimeInput from "../../../components/Inputs/FormItems/DateTimeInput/DateTimeInput";
import Modal from '@components/Modal/Modal';

import styles from './ScheduleQuizModal.module.scss';
import NumberInput from "@components/Inputs/NumberInput/NumberInput";
import SelectUnitInput, {OptionProps} from "@components/Inputs/SelectUnitInput/SelectUnitInput";
import QuestionsSelectInput from "@domain/Quizes/ScheduleQuizModal/QuestionsSelectInput/QuestionsSelectInput";
import TextInput from "@components/Inputs/TextInput/TextInput";
import EmailsInput from "@domain/Quizes/ScheduleQuizModal/EmailsInput/EmailsInput";

const timeToStartUnitsObj:  OptionProps[] = [
  {
    label: 'Minut',
    value: timeToStartUnitsEnum.minutes,
  },
  {
    label: 'Godzin',
    value: timeToStartUnitsEnum.hours,
  },
  {
    label: 'Dni',
    value: timeToStartUnitsEnum.days,
  }
]

const ScheduleQuizModal = ():JSX.Element => {

  const dispatch = useDispatch();
  const isModalVisible = useSelector(selectors.modalVisibility);
  const currentQuiz = useSelector(quizSettingsSelectors.currentQuiz);
  const isCurrentQuizBeingFetch = useSelector(quizSettingsSelectors.isCurrentQuizBeingFetch);
  const startTime = useSelector(selectors.startTime);
  const timeToStart = useSelector(selectors.timeToStart);
  const timeToStartUnit = useSelector(selectors.timeToStartUnit);
  const testDurationInMinutes = useSelector(selectors.testDurationInMinutes);
  const questionsIds = useSelector(selectors.questionsIds);
  const emailMessage = useSelector(selectors.emailMessage);
  const emails = useSelector(selectors.emails);
  //losowe pytania -> ilość pytan

  const onStartTimeUpdateHandle = (date: Date | null) => {
    if (!date) {
      return;
    }
    dispatch(actions.updateStartTime(date.toISOString()));
  }

  const onTimeToStartUpdateHandle = (event: ChangeEvent<{ name?: string | undefined; value: unknown; }>) => {
    const newValue = event.target.value;
    if (typeof newValue !== "number") {
      return;
    }
    dispatch(actions.updateTimeToStart(newValue));
  }

  const onTimeToStartUnitUpdateHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value)
    dispatch(actions.updateTimeToStartUnit(newValue));
  }

  const onTestDurationInMinutesUpdateHandle = (event: ChangeEvent<{ name?: string | undefined; value: unknown; }>) => {
    const newValue = event.target.value;
    if (typeof newValue !== "number") {
      return;
    }
    dispatch(actions.updateTestDurationInMinutes(newValue));
  }

  const onQuestionsIdsUpdateHandle = (questionsIds: number[]) => {
    dispatch(actions.updateQuestionsIds(questionsIds));
  }

  const onEmailMessageUpdateHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.updateEmailMessage(event.target.value));
  }

  const onEmailsUpdateHandle = (emails: string[]) => {
    dispatch(actions.updateEmails(emails));
  }

  const onCancel = () => {
    dispatch(actions.onModalScheduleClose());
  }

  const onSubmit = () => {

  }


  return (
    <Modal
      isModalOpen={isModalVisible}
      title={<ScheduleQuizHeader name={currentQuiz.name} subject={currentQuiz.subject} />}
      description={'Zaplanuj quiz'}
      loading={isCurrentQuizBeingFetch}
      onSubmit={onSubmit}
      onCancel={onCancel}
    >
      <div className={styles.formRoot}>
        <div>
          <DateTimeInput
            label="Wprowadź czas rozpoczęcia Quizu"
            startsInNote="Quiz zaplanowany na za "
            dateISOString={startTime}
            onDateChange={onStartTimeUpdateHandle}
          />
        </div>
        <div>
          <p className={styles.inputRowHeader}>Czas przez który będzie można rozpocząć Quiz</p>
          <div className={styles.inputRow}>
            <NumberInput
              id={'start_duration'}
              min={1}
              max={60}
              value={timeToStart}
              onChange={onTimeToStartUpdateHandle}
            />
            <SelectUnitInput
              id={'start_duration_unit'}
              onChange={onTimeToStartUnitUpdateHandle}
              options={timeToStartUnitsObj}
              value={timeToStartUnit}
            />
          </div>
        </div>
        <div>
          <p className={styles.inputRowHeader}>Czas na udzielanie odpowiedzi</p>
          <div className={styles.inputRow}>
            <NumberInput
              id={'quiz_duration'}
              min={5}
              max={120}
              value={testDurationInMinutes}
              onChange={onTestDurationInMinutesUpdateHandle}
            />
            <p className={styles.unit}>
              Minut
            </p>
          </div>
        </div>
        <div>
          <p className={styles.inputRowHeader}>Wybierz pytania biorące udział w Quizie:</p>
          <QuestionsSelectInput
            questions={currentQuiz.questions}
            selectedIds={questionsIds}
            onUpdate={onQuestionsIdsUpdateHandle}
          />
        </div>
        <div>
          <p className={styles.inputRowHeader}>Skonfiguruj adresy email biorące udział w Quizie:</p>
          <EmailsInput
            value={emails}
            onChange={onEmailsUpdateHandle}
          />
        </div>
        <div>
          <p className={styles.inputRowHeader}>Wiadomość email:</p>
          <TextInput
            id={'email-message-input'}
            value={emailMessage}
            onChange={onEmailMessageUpdateHandle}
            variant={'outlined'}
            multiline={true}
            rowsMax={15}
            rows={5}
          />
        </div>
      </div>
    </Modal>
  );
}

export default ScheduleQuizModal;
