import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import bindAll from 'lodash.bindall';
import ReactTooltip from 'react-tooltip';
import {defineMessages, injectIntl, intlShape} from 'react-intl';
import {defaultProjectId} from '../../reducers/project-state';
import styles from './project-input.css';
import {setProjectId} from '../../lib/tw-navigation-utils';

