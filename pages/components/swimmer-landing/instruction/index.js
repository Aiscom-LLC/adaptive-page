import React from 'react';
import instructionStyles from './instruction.css';
import indexStyles from '../../../index.css';
import InstructionItem from '../instruction-item';

const steps = [
  {
    title: 'Зарегистрируйтесь',
    subtitle: 'на портале через Strava',
    arrowType: 'arrow',
  },
  {
    title: 'Заполните',
    subtitle: 'анкету с данными',
    arrowType: 'arrow',
  },
  {
    title: 'Оплатите',
    subtitle: 'подписку 200р/мес',
    arrowType: 'mobileArrow',
  },
  {
    title: 'Найдите',
    subtitle: 'тренера',
    arrowType: 'arrow',
  },
  {
    title: 'Оплатите',
    subtitle: 'занятия за неделю или месяц',
    arrowType: 'arrow',
  },
  {
    title: 'Тренируйтесь',
    subtitle: 'с лучшими тренерами по индивидуальному плану тренировок',
    arrowType: 'shadowAarrow',
  },
];

const Instruction = () => (
  <section>
    <h2 className={`${instructionStyles.title} ${instructionStyles.mobile}`}>
      Как начать тренироваться с
      <span> CRYSTAL</span>
    </h2>
    <div className={instructionStyles.wrapper}>
      <div className={indexStyles.paddingWrapper}>
        <h2 className={instructionStyles.title}>Как начать тренироваться с CRYSTAL</h2>
        <div className={instructionStyles.content}>
          {steps.map((step, index) => (
            <InstructionItem
              key={`0${index + 1}`}
              number={`0${index + 1}`}
              {...step}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Instruction;
