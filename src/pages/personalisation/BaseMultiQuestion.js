/* @flow */

import React from "react";
import mui from "material-ui";

import BaseQuestion from "./BaseQuestion";
import components from "../../components";
import icons from "../../icons";
import SessionStore from "../../mixins/SessionStore";
import * as iss from "../../iss";

/*::`*/@SessionStore/*::`;*/
class BaseMultiQuestion extends BaseQuestion {
    constructor(props: Object) {
        super(props);
        this.state = {
            answers: new Set(),
        };
    }

    componentDidMount(): void {
        var answers = new Set(this.storage.getJSON(this.props.name));

        this.setState({answers: answers});
    }

    // flow:disable
    static get summaryValue(): string {
        var nSelected =
            (this.storage.getJSON(this.defaultProps.name) || []).length;

        return `${nSelected} selected`;
    }

    // flow:disable
    static get answer(): Array<string> {
        return this.storage.getJSON(this.defaultProps.name);
    }

    static getSearch(request: iss.searchRequest): ?iss.searchRequest {
        var value = this.answer;

        if (value != null) {
            return this.getSearchForAnswer(request, new Set(value));
        } else {
            // this question can't been answered
            return null;
        }
    }

    static getSearchForAnswer(
        request: iss.searchRequest,
        answers: Set<string>
    ): ?iss.searchRequest {
        return request;
    }

    onAnswerTouchTap(answer: string, enabled: boolean): void {
        var answers = this.state.answers;

        if (enabled) {
            answers.add(answer);
        } else {
            answers.delete(answer);
        }

        this.setState({answers: answers});
    }

    onDoneTouchTap(): void {
        this.storage.setJSON(this.props.name, Array.from(this.state.answers));
        this.nextStep();
    }

    render(): ReactElement {
        var selected = this.state.answers;

        return (
            <div>
                <components.HeaderBar
                    primaryText={
                        <div>
                            <icons.LogoLight />
                            {this.props.question}
                        </div>
                    }
                />
                <mui.List className="List">
                {this.props.answers.map((answer, index) =>
                    <div
                        className="ListItem"
                        key={index}
                    >
                    <mui.ListItem
                        primaryText={answer}
                        leftCheckbox={
                            <mui.Checkbox
                                checked={selected.has(answer)}
                                checkedIcon={<icons.CheckboxSelected />}
                                unCheckedIcon={<icons.CheckboxUnselected />}
                                onCheck={this.onAnswerTouchTap.bind(
                                    this, answer, !selected.has(answer)
                                )}
                                disableFocusRipple={true}
                                disableTouchRipple={true}
                            />
                        }
                        disableFocusRipple={true}
                        disableTouchRipple={true}
                    />
                    </div>)}
                </mui.List>

                <div className="done-button">
                    <mui.FlatButton
                        label="Done"
                        onTouchTap={this.onDoneTouchTap.bind(this)}
                        disableFocusRipple={true}
                        disableTouchRipple={true}
                    />
                </div>
            </div>
        );
    }
}

export default BaseMultiQuestion;
