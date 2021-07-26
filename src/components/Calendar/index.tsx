import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  StyledMonthYear,
  StyledCalendar,
  StyledSpan,
  StyledPreviosMonth,
  StyledNextMonth,
  StyledBoard,
  IDayCalendar,
  StyledPreviosYear,
  StyledPreviosDecade,
  StyledNextDecade,
  StyledNextYear,
  StyledToday,
  DayCalendar,
} from "./styles";
import { FlexBox } from "../containers";
import { WEEK, MONTHS } from "../../utils/constants";
import { DateNone } from "interfaces/intarfaces";

interface ICalendarIn {
  value?: DateNone;
  endInterval?: DateNone;
  range?: boolean;
  firstDayOfWeek?: number; // 1 - Sunday, 2 - Monday
}

export interface ICalendar extends ICalendarIn {
  onChange: (a: DateNone, b: DateNone) => void;
}

export const useCalendar = ({
  value = undefined,
  endInterval = undefined,
  range,
}: ICalendarIn): ICalendar => {
  const [begin, setBegin] = useState<DateNone>(value);
  const [end, setEnd] = useState<DateNone>(endInterval);

  return {
    value: begin,
    endInterval: end,
    onChange: (a: DateNone, b: DateNone) => {
      setBegin(a);
      setEnd(b);
    },
    range,
  };
};

const Calendar: React.FC<ICalendar> = ({
  value = undefined,
  endInterval = undefined,
  onChange,
  range = true,
  firstDayOfWeek = 1,
}) => {
  const { t } = useTranslation();
  const [currentDate, setCurrentDate] = useState<Date>(value ?? new Date());
  const [beginInterval, setBeginInterval] = useState(value);
  const [finishInterval, setFinishInterval] = useState(endInterval);
  const [selectedBegin, setSelectedBegin] = useState(true);

  React.useEffect(() => {
    if (finishInterval !== undefined) {
      onChange(beginInterval, finishInterval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finishInterval]);

  const changeBoundary = (date: Date) => {
    if (selectedBegin) {
      setBeginInterval(date);
      setFinishInterval(undefined);
      if (!range) {
        onChange(date, date);
        return;
      }
      onChange(undefined, undefined);
    } else {
      if (beginInterval && date < beginInterval) {
        setFinishInterval(beginInterval);
        setBeginInterval(date);
      } else setFinishInterval(date);
    }
    setSelectedBegin(!selectedBegin);
  };

  const changeMonth = (direction: boolean) => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + (direction ? 1 : -1),
        1,
        12,
        0,
        1,
        0
      )
    );
  };

  const changeYear = (x: number) => {
    const newDate: Date = new Date(
      currentDate.setFullYear(currentDate.getFullYear() + x)
    );
    setCurrentDate(newDate);
  };

  const setToday = () => {
    setCurrentDate(new Date());
    changeBoundary(new Date());
  };
  return (
    <StyledCalendar>
      <FlexBox justify="space-between" margin="1em 0">
        <StyledMonthYear>
          {`${t(
            `calendar.months.${MONTHS[currentDate.getMonth()]}`
          )} ${currentDate.getFullYear()}`}
        </StyledMonthYear>
        <FlexBox justify="flex-end">
          <StyledPreviosDecade size="1em" onClick={() => changeYear(-10)} />
          <StyledPreviosYear size="1em" onClick={() => changeYear(-1)} />
          <StyledPreviosMonth size="1.3em" onClick={() => changeMonth(false)} />
          <StyledToday size="0.7em" onClick={() => setToday()} />
          <StyledNextMonth size="1.3em" onClick={() => changeMonth(true)} />
          <StyledNextYear size="1em" onClick={() => changeYear(1)} />
          <StyledNextDecade size="1em" onClick={() => changeYear(10)} />
        </FlexBox>
      </FlexBox>
      <StyledBoard>
        {Array.from(
          firstDayOfWeek === 1 ? Array(7).keys() : [1, 2, 3, 4, 5, 6, 0]
        ).map((i) => (
          <StyledSpan key={i}>{t(`calendar.week.${WEEK[i]}`)}</StyledSpan>
        ))}
        <DayBoard
          currentMonth={currentDate.toISOString().slice(0, 7)}
          firstWeekDay={firstDayOfWeek}
          changeBoundary={changeBoundary}
          begin={
            beginInterval !== undefined
              ? beginInterval.toISOString().slice(0, 10)
              : ""
          }
          end={
            finishInterval !== undefined
              ? finishInterval.toISOString().slice(0, 10)
              : ""
          }
        />
      </StyledBoard>
    </StyledCalendar>
  );
};

const boardMonth = (currentMonth: string, firstDayOfWeek: number): Date[] => {
  const currentDate = new Date(currentMonth + "-01");
  const y = currentDate.getFullYear();
  const m = currentDate.getMonth();
  let firstDay = currentDate.getDay();
  let listD = [];
  const sizeBoard = firstDay + new Date(y, m + 1, 0).getDate() > 35 ? 42 : 35;
  for (let cell in Array.from({ length: sizeBoard }, (_, i) => i)) {
    listD.push(
      new Date(y, m, Number(cell) - firstDay + firstDayOfWeek, 12, 0, 1, 0)
    );
  }
  return listD;
};

interface IBoard {
  currentMonth: string;
  firstWeekDay?: number;
  changeBoundary: (d: Date) => void;
  begin: string;
  end: string;
}

const DayBoard: React.FC<IBoard> = React.memo(
  ({
    currentMonth = new Date().toISOString().slice(0, 7),
    firstWeekDay = 1,
    changeBoundary,
    begin = "",
    end = "",
  }) => {
    const days = React.useMemo(
      () => boardMonth(currentMonth, firstWeekDay),
      [currentMonth, firstWeekDay]
    );

    const stateDate = (date: Date): IDayCalendar => {
      const dt = date.toISOString().slice(0, 10);
      if (dt === begin || dt === end) return { boundaryInterval: true };

      let temp = {};
      if (dt.slice(0, 7) !== currentMonth) temp = { strangerDay: true };
      if (begin.length > 0 && end.length > 0 && dt > begin && dt < end)
        return { insideInterval: true, ...temp };
      return { ...temp };
    };

    return (
      <>
        {days.map((day, j) => (
          <DayCalendar
            {...stateDate(day)}
            onClick={() => changeBoundary(day)}
            key={j}
          >
            {day.getDate()}
          </DayCalendar>
        ))}
      </>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.currentMonth !== nextProps.currentMonth) return false;
    if (prevProps.firstWeekDay !== nextProps.firstWeekDay) return false;
    if (prevProps.begin !== nextProps.begin) return false;
    if (prevProps.end !== nextProps.end) return false;
    return true;
  }
);

export default React.memo(Calendar, (prevProps, nextProps) => {
  if (prevProps.value !== nextProps.value) return false;
  if (prevProps.endInterval !== nextProps.endInterval) return false;
  return true;
});
