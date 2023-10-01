import { useState } from "react";
import {
  PersonalInfoWrapper,
  PersonalInfoTop,
  PersonalInfoBody,
  EachInfoWrapper,
} from "./PersonalInfo.styled";
import { formData } from "./PersonalInfoData";
import Controls from "../../components/Controls/Controls";
import AddQuestionBtn from "../../components/AddQuestionBtn/AddQuestionBtn";
import Question from "../../components/Question/Question";
import { QuestionDetails } from "../../components/Question/QuestionData";
import AddedQuestion from "../../components/AddedQuestion/AddedQuestion";

const PersonalInfo = () => {
  const [checkedInfo, setCheckedInfo] = useState<string[]>([]);
  const [toggledInfo, setToggledInfo] = useState<string[]>([]);
  const [questions, setQuestions] = useState<QuestionDetails[]>([]);
  const [savedQuestions, setSavedQuestions] = useState<QuestionDetails[]>([]);
  const [editQuestions, setEditQuestions] = useState<QuestionDetails[]>([]);
  const question: QuestionDetails = {
    type: "",
    questionValue: "",
    choiceArr: [""],
    checked: false,
    maxChoice: null,
    moreInfo: "",
    maxDuration: null,
    unit: "",
  };

  const addQuestion = () => {
    setQuestions((prevQuestions) => [...prevQuestions, { ...question }]);
  };

  const selectType = (type: string, index: number) => {
    const copyArr = [...questions];
    const requiredQuestion = copyArr[index];
    requiredQuestion.type = type;
    copyArr[index] = requiredQuestion;
    setQuestions(copyArr);
  };

  const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const copyArr = [...questions];
    const questionIndex = Number(name);
    const requiredQuestion = copyArr[questionIndex];
    requiredQuestion.questionValue = value;
    copyArr[questionIndex] = requiredQuestion;
    setQuestions(copyArr);
  };

  const handleChangeChoice =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      const copyArr = [...questions];
      const questionIndex = Number(name);
      copyArr.map((item, itemIndex) => {
        if (itemIndex === questionIndex) {
          item.choiceArr[index] = value;
        }
        return item;
      });
      setQuestions(copyArr);
    };

  const handleAddChoice = (choiceIndex: number) => {
    const copyArr = [...questions];
    copyArr[choiceIndex].choiceArr.push("");
    setQuestions(copyArr);
  };

  const handleCheck = (checkIndex: number) => {
    const copyArr = [...questions];
    copyArr[checkIndex].checked = !copyArr[checkIndex].checked;
    setQuestions(copyArr);
  };

  const handleChangeMaxChoice = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setQuestions((prevQuestions) => {
      const copyArr = [...prevQuestions];
      const questionIndex = Number(name);
      copyArr[questionIndex].maxChoice = Number(value);
      return copyArr;
    });
  };

  const handleDeleteQuestion = (itemIndex: number) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter(
        (question) => questions.indexOf(question) !== itemIndex
      )
    );
    setSavedQuestions((prevQuestions) =>
      prevQuestions.filter(
        (question) => questions.indexOf(question) !== itemIndex
      )
    );
    setEditQuestions((prevQuestions) =>
      prevQuestions.filter(
        (question) => questions.indexOf(question) !== itemIndex
      )
    );
  };

  const handleSaveQuestion = (index: number) => {
    if (questions[index].type === "" || questions[index].questionValue === "") {
      alert("Question and Type fields cannot be empty");
      return;
    }
    const existingQuestion = savedQuestions.find(
      (question) => question === questions[index]
    );
    if (existingQuestion) {
      savedQuestions[index] = questions[index];
      setSavedQuestions(savedQuestions);
    } else {
      setSavedQuestions((prevQuestions) => [
        ...prevQuestions,
        questions[index],
      ]);
    }
    setEditQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question !== questions[index])
    );
  };

  const handleClickEdit = (editIndex: number) => {
    setEditQuestions((prevQuestions) => [
      ...prevQuestions,
      savedQuestions[editIndex],
    ]);
  };

  const handleChangeVideoValues =
    (questionIndex: number) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      const { name, value } = e.target;
      const copyArr = [...questions];
      const requiredQuestion = copyArr[questionIndex];
      requiredQuestion[name] = value;
      copyArr[questionIndex] = requiredQuestion;
      setQuestions(copyArr);
    };

  const addChecked = (text: string) => {
    checkedInfo.includes(text)
      ? setCheckedInfo(checkedInfo.filter((info) => info !== text))
      : setCheckedInfo((prevInfo) => [...prevInfo, text]);
  };

  const addToggled = (text: string) => {
    toggledInfo.includes(text)
      ? setToggledInfo(toggledInfo.filter((info) => info !== text))
      : setToggledInfo((prevInfo) => [...prevInfo, text]);
  };
  return (
    <PersonalInfoWrapper>
      <PersonalInfoTop>
        <span>Personal Information</span>
      </PersonalInfoTop>
      <PersonalInfoBody>
        {formData.map((data, index) => (
          <EachInfoWrapper key={index}>
            <p className="title">
              {data} {index === 3 && <span>(without dial code)</span>}
            </p>
            {index > 2 && (
              <Controls
                checkBoxText={"Internal"}
                sliderText={toggledInfo.includes(data) ? "Show" : "Hide"}
                checked={checkedInfo.includes(data)}
                slid={toggledInfo.includes(data)}
                handleToggle={() => addToggled(data)}
                handleCheck={() => addChecked(data)}
              />
            )}
          </EachInfoWrapper>
        ))}
        {savedQuestions.map((question, index) => (
          <AddedQuestion
            key={index}
            toBeEdited={
              <Question
                onClickDelete={(itemIndex: number) =>
                  handleDeleteQuestion(itemIndex)
                }
                onClickSave={(questionIndex: number) =>
                  handleSaveQuestion(questionIndex)
                }
                selectQuestionType={(
                  questionType: string,
                  questionIndex: number
                ) => selectType(questionType, questionIndex)}
                onChange={handleQuestionChange}
                index={index}
                fieldValues={question}
                display={editQuestions.includes(question) ? "flex" : "none"}
                editing={true}
                checked={question.checked}
                onChangeChoice={(index: number) => handleChangeChoice(index)}
                onChangeMaxValue={handleChangeMaxChoice}
                onClickAddChoice={(index: number) => handleAddChoice(index)}
                onClickCheckBox={(index: number) => handleCheck(index)}
                maxValue={question.maxChoice}
                questionIndex={index}
                onChangeVideoValues={(questionIndex: number) =>
                  handleChangeVideoValues(questionIndex)
                }
              />
            }
            questionType={question.type}
            question={question.questionValue}
            onClickEdit={() => handleClickEdit(index)}
            duration={`${question.maxDuration} ${question.unit.toLowerCase()}`}
          />
        ))}
        {questions.map((question, index) => (
          <Question
            key={index}
            onClickDelete={(questionIndex: number) =>
              handleDeleteQuestion(questionIndex)
            }
            onClickSave={(questionIndex: number) =>
              handleSaveQuestion(questionIndex)
            }
            selectQuestionType={(questionType: string, questionIndex: number) =>
              selectType(questionType, questionIndex)
            }
            onChange={handleQuestionChange}
            index={index}
            fieldValues={question}
            display={savedQuestions.includes(question) ? "none" : "flex"}
            editing={false}
            checked={question.checked}
            onChangeChoice={(index: number) => handleChangeChoice(index)}
            onChangeMaxValue={handleChangeMaxChoice}
            onClickAddChoice={(index: number) => handleAddChoice(index)}
            onClickCheckBox={(index: number) => handleCheck(index)}
            maxValue={question.maxChoice}
            questionIndex={index}
            onChangeVideoValues={(questionIndex: number) =>
              handleChangeVideoValues(questionIndex)
            }
          />
        ))}
        <AddQuestionBtn onClick={addQuestion} />
      </PersonalInfoBody>
    </PersonalInfoWrapper>
  );
};

export default PersonalInfo;
