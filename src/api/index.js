"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Campaigns_1 = __importDefault(require("./Campaigns"));
const Lists_1 = __importDefault(require("./Lists"));
const ListSubscribers_1 = __importDefault(require("./ListSubscribers"));
const Templates_1 = __importDefault(require("./Templates"));
const TransactionEmail_1 = __importDefault(require("./TransactionEmail"));
exports.default = {
    Campaigns: Campaigns_1.default,
    Lists: Lists_1.default,
    ListSubscribers: ListSubscribers_1.default,
    Templates: Templates_1.default,
    TransactionalEmails: TransactionEmail_1.default
};
