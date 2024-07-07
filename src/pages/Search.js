// src/pages/Search.js
import PropTypes from "prop-types";
import styles from "./Search.module.css"; // Import the CSS Module

const FacetedSearch = ({ className = "" }) => {
  return (
    <div className={`${styles.facetedSearch} ${className}`}>
      <form className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.lawyerWrapper}>
              <h2 className={styles.lawyer}>Lawyer:</h2>
            </div>
            <div className={styles.dropdownParent}>
              <div className={styles.dropdown}>
                <div className={styles.label}>Years of Practice</div>
                <img className={styles.chevronDownIcon} alt="" src="/chevrondown.svg" />
              </div>
              <div className={styles.dropdown1}>
                <div className={styles.label1}>Law Expertise</div>
                <img className={styles.chevronDownIcon1} alt="" src="/chevrondown.svg" />
              </div>
              <div className={styles.dropdown2}>
                <div className={styles.label2}>Location</div>
                <img className={styles.chevronDownIcon2} alt="" src="/chevrondown.svg" />
              </div>
              <div className={styles.dropdown3}>
                <div className={styles.label3}>Graduation</div>
                <img className={styles.chevronDownIcon3} alt="" src="/chevrondown.svg" />
              </div>
            </div>
          </div>
          <button className={styles.searchWrapper}>
            <div className={styles.search}>Search</div>
          </button>
        </div>
        <div className={styles.caseSearch}>
          <div className={styles.caseSearchInner}>
            <div className={styles.frameDiv}>
              <div className={styles.casesWrapper}>
                <h2 className={styles.cases}>Cases:</h2>
              </div>
              <div className={styles.dropdownGroup}>
                <div className={styles.dropdown4}>
                  <div className={styles.label4}>Year of Action</div>
                  <img className={styles.chevronDownIcon4} alt="" src="/chevrondown.svg" />
                </div>
                <div className={styles.dropdownContainer}>
                  <div className={styles.dropdown5}>
                    <div className={styles.label5}>Results</div>
                    <img className={styles.chevronDownIcon5} alt="" src="/chevrondown-5.svg" />
                  </div>
                  <div className={styles.dropdown6}>
                    <div className={styles.label6}>Defendant</div>
                    <img className={styles.chevronDownIcon6} alt="" src="/chevrondown-5.svg" />
                  </div>
                </div>
                <div className={styles.dropdown7}>
                  <div className={styles.label7}>Prosecutor</div>
                  <img className={styles.chevronDownIcon7} alt="" src="/chevrondown-5.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.facetedSearch1}>
            <img className={styles.searchIcon} alt="" src="/search.svg" />
            <div className={styles.label8}>Search</div>
          </div>
        </div>
      </form>
      <section className={styles.searchForA}>Search For A Specific Case or Lawyer</section>
      <section className={styles.specificSearch}>
        <div className={styles.facetedSearch2}>
          <div className={styles.searchContainer}>
            <img className={styles.searchIcon1} alt="" src="/search-1.svg" />
          </div>
          <div className={styles.label9}>Search</div>
        </div>
      </section>
    </div>
  );
};

FacetedSearch.propTypes = {
  className: PropTypes.string,
};

export default FacetedSearch;
