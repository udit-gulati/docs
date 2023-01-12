import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import IntroUrl from "../../../../static/img/intro.png";

export default function Box(props) {
  if (props.list == "Astro Pools") {
    return (
      <div className={styles.box}>
        <img src={props.image} height={76} width={76} className="opacity-50 mt-4" />

        <div>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.subtext}>{props.description}</p>
          <ul className={styles.list}>
            <li>
              <a className={styles.links} href="../../../../docs/learn/astro-pools/constant-product-pools">
                Constant Product Pools
              </a>
            </li>

            <li>
              <a className={styles.links} href="../../../../docs/learn/astro-pools/stableswap-pools">
                Stableswap Pools
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  } else if (props.list == "Workstation") {
    return (
      <div className={styles.box}>
        <img src={props.image} height={76} width={76} className="opacity-50 self-start mt-4" />

        <div>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.subtext}>{props.description}</p>
          <ul className={styles.list}>
            <li>
              <a className={styles.links} href="../../../../docs/learn/category/starter-pack">
                Starter Pack
              </a>
            </li>

            <li>
              <a className={styles.links} href="../../../../docs/learn/category/farmers-fields">
                Farmers Fields
              </a>
            </li>

            <li>
              <a className={styles.links} href="../../../../docs/learn/category/traders-port">
                Traders Port
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  } else if (props.list == "Tutorials") {
    return (
      <div className={styles.box}>
        <img src={props.image} height={76} width={76} className="opacity-50 self-start mt-4" />

        <div>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.subtext}>{props.description}</p>
          <ul className={styles.list}>
            <li>
              <a className={styles.links} href="../../../../docs/develop/category/trading">
                Trading
              </a>
            </li>

            <li>
              <a className={styles.links} href="../../../../docs/develop/category/farming">
                Farming
              </a>
            </li>

            <li>
              <a className={styles.links} href="../../../../docs/develop/category/governance">
                Governance
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  } else if (props.list == "Astro Generators") {
    return (
      <div className={styles.box}>
        <img src={props.image} height={76} width={76} className="opacity-50 self-start mt-4" />

        <div>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.subtext}>{props.description}</p>
          <ul className={styles.list}>
            <li>Proxy Contracts</li>
            <li>Dual Rewards</li>
          </ul>
        </div>
      </div>
    );
  } else if (props.list == "Astro Assembly") {
    return (
      <div className={styles.box}>
        <img src={props.image} height={76} width={76} className="opacity-50 self-start mt-4" />

        <div>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.subtext}>{props.description}</p>
          <ul className={styles.list}>
            <li>
              <a className={styles.links} href="../../../../docs/learn/astral-assembly">
                Overview
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  } else if (props.list == "Astro Tokenomics") {
    return (
      <div className={styles.box}>
        <img src={props.image} height={76} width={76} className="opacity-50 self-start mt-4" />

        <div>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.subtext}>{props.description}</p>
          <ul className={styles.list}>
            <li>
              <a className={styles.links} href="../../../../docs/learn/astro-tokenomics/utility">
                Utility
              </a>
            </li>

            <li>
              <a className={styles.links} href="../../../../docs/learn/astro-tokenomics/fees">
                Fees
              </a>
            </li>

            <li>
              <a className={styles.links} href="../../../../docs/learn/astro-tokenomics/allocation">
                Allocation
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  } else if (props.list == "AIPF") {
    return (
      <div className={styles.box}>
        <img src={props.image} height={76} width={76} className="opacity-50 self-start mt-4" />

        <div>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.subtext}>{props.description}</p>
          <ul className={styles.list}>
            <li>AIP Lifecycle</li>
            <li>AIP Templates</li>
          </ul>
        </div>
      </div>
    );
  } else if (props.list == "AIF") {
    return (
      <div className={styles.box}>
        <img src={props.image} height={76} width={76} className="opacity-50 self-start mt-4" />

        <div>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.subtext}>{props.description}</p>
          <ul className={styles.list}>
            <li>Overview</li>
            <li>AIF Template</li>
          </ul>
        </div>
      </div>
    );
  } else if (props.list == "Proposal Messages") {
    return (
      <div className={styles.box}>
        <img src={props.image} height={76} width={76} className="opacity-50 self-start mt-4" />

        <div>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.subtext}>{props.description}</p>
          <ul className={styles.list}>
            <li>
              <a className={styles.links} href="../../../../docs/govern/proposal-messages/astro-allocation-points">
                ASTRO Allocation Points
              </a>
            </li>

            <li>
              <a className={styles.links} href="../../../../docs/govern/proposal-messages/proxy-contracts">
                Proxy Contracts
              </a>
            </li>

            <li>
              <a className={styles.links} href="../../../../docs/govern/proposal-messages/dual-rewards">
                Dual Rewards
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  } else if (props.list == "Smart Contracts") {
    return (
      <div className={styles.box}>
        <img src={props.image} height={76} width={76} className="opacity-50 self-start mt-4" />

        <div>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.subtext}>{props.description}</p>
          <ul className={styles.list}>
            {/* <li>
            <a className={styles.links} href="../../../../docs/develop/category/smart-contracts">Overview</a>
            </li> */}

            <li>
              <a className={styles.links} href="../../../../docs/develop/smart-contracts/astroport-contract-addresses">
                Astroport Contract Addresses
              </a>
            </li>

            <li>
              <a className={styles.links} href="../../../../docs/develop/smart-contracts/factory">
                Astroport Factory
              </a>
            </li>

            <li>
              <a className={styles.links} href="../../../../docs/develop/smart-contracts/swap-pairs/swap-pairs-intro">
                Swap Pairs
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  } else if (props.list == "Backend") {
    return (
      <div className={styles.box}>
        <img src={props.image} height={76} width={76} className="opacity-50 self-start mt-4" />

        <div>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.subtext}>{props.description}</p>
          <ul className={styles.list}>
            <li>
              <a className={styles.links} href="../../../../docs/develop/backend#apy-calculation">
                APY Calculation
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
