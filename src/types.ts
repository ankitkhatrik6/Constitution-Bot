/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ConstitutionArticle } from "./data/nepal_constitution.js";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  citations?: ConstitutionArticle[];
  engineUsed?: string;
  searchedQuery?: string;
}

export interface NationalSymbol {
  name: string;
  nepaliName: string;
  description: string;
  symbol: string;
  color: string;
}
